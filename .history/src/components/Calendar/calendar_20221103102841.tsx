import { useEffect, useState } from "react";
import styles from "../../../styles/calendar.module.css";
import EventLists from "./EventLists";
import FullCalendar, { isValidDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS, CREATE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";
import OutlinedInput from "@mui/material/OutlinedInput";
import { MuiColorInput } from "mui-color-input";

const Calendar: React.FC = () => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventContent, setEventContent] = useState<string>("");
  const [eventDay, setEventDay] = useState<string>("");
  const [eventColor, setEventColor] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const { data, error, loading } = useQuery(GET_POSTS);
  const [CreatePost] = useMutation(CREATE_POST);

  let day = new Date();
  let year = `${day.getFullYear()}`;
  let month = `${day.getMonth()} +1`;
  let date = `${day.getDate()}`;
  if (month === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
    month = `0${day.getMonth()}`;
  }
  if (date === "1" || " 2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
    date = `0${day.getDate()}`;
  }
  const today = year + "-" + month + "-" + date;
  console.log(month);
  console.log(today);
  if (eventDay === "") setEventDay(today);

  useEffect(() => {
    if (alert || errorAlert) {
      setTimeout(() => {
        if (alert) {
          setAlert(false);
        } else {
          setErrorAlert(false);
        }
      }, 3000);
    }
  });

  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;

  const { posts } = data;

  function handleModal() {
    setOpen(!open);
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = eventDay.length && eventTitle.length >= 1 && eventColor;

    if (isValid) {
      CreatePost({
        variables: {
          title: eventTitle,
          content: eventContent,
          date: eventDay,
          color: eventColor,
        },
      });
      setAlert(true);
    } else {
      setErrorAlert(true);
    }
    setEventContent("");
    setEventTitle("");
    setOpen(false);
    setTimeout(doReload, 1000);
  }

  function alertClose() {
    setAlert(false);
    setErrorAlert(false);
  }

  return (
    <div className={styles.calendar}>
      {alert && (
        <Alert
          onClose={() => {
            alertClose();
          }}
          severity="success"
        >
          This is a success alert — check it out!
        </Alert>
      )}
      {errorAlert && (
        <Alert
          onClose={() => {
            alertClose();
          }}
          severity="error"
        >
          This is a success alert — check it out!
        </Alert>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        events={posts}
        dateClick={(e) => setEventDay(e.dateStr)}
      />
      <h2>
        {eventDay}
        <Button onClick={handleModal}>Add</Button>
      </h2>
      <ul>
        {posts.map(
          (post: {
            length: number;
            title: string;
            content: string;
            date: string;
            color: string;
          }) => {
            if (eventDay === post.date) {
              return (
                <li key={post.length}>
                  <EventLists
                    id={post.length}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    color={post.color}
                  />
                </li>
              );
            }
          }
        )}
      </ul>

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ backgroundColor: "white" }}>
          <Typography>{eventDay}</Typography>
          <form onSubmit={(e) => submitHandler(e)}>
            <TextField
              sx={{ width: "20%" }}
              type="text"
              color={eventTitle ? "primary" : "error"}
              value={eventTitle}
              label="Title"
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <TextField
              sx={{ width: "40%" }}
              color={eventContent ? "primary" : "error"}
              value={eventContent}
              label="Context"
              onChange={(e) => setEventContent(e.target.value)}
            />
            <MuiColorInput
              sx={{ width: "15%" }}
              color={eventColor ? "primary" : "error"}
              variant="outlined"
              label="Color"
              value={eventColor}
              onChange={(color) => setEventColor(color)}
            />

            <OutlinedInput
              type="submit"
              sx={{ wdith: "10%" }}
              color={eventTitle ? "primary" : "error"}
            />
          </form>

          <Button onClick={handleModal}>close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;
