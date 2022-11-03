import { useEffect, useState } from "react";
import styles from "../../../styles/calendar.module.css";
import EventLists from "./EventLists";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import React from "react";
import {
  Alert,
  Autocomplete,
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
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import { MuiColorInput } from "mui-color-input";

const Calendar: React.FC = () => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventContent, setEventContent] = useState<string>("");
  const [eventDay, setEventDay] = useState<string>("");
  const [eventColor, setEventColor] = useState<string>("000000");
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const { data, error, loading } = useQuery(GET_POSTS);
  const [CreatePost] = useMutation(CREATE_POST);

  let day = new Date();
  let year = day.getFullYear();
  let month = day.getMonth() + 1;
  let date = day.getDate();
  const today = year + "-" + month + "-" + date;

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

  function submitHandler(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
    const isValid = eventDay.length && eventTitle.length >= 1;
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
        {eventDay && <Button onClick={handleModal}>Add</Button>}
      </h2>
      <ul>
        {posts.map(
          (post: {
            length: number;
            title: string | undefined;
            content: string | undefined;
            date: string | undefined;
            color: string | undefined;
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
        <Box style={{ backgroundColor: "skyblue" }}>
          <Typography>{eventDay}</Typography>
          <FormControlUnstyled onSubmit={(e) => submitHandler(e)}>
            <TextField
              sx={{ width: "20%" }}
              type="text"
              value={eventTitle}
              label="Title"
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <TextField
              sx={{ width: "40%" }}
              value={eventContent}
              label="Context"
              onChange={(e) => setEventContent(e.target.value)}
            />
            <MuiColorInput
              sx={{ width: "10%" }}
              variant="outlined"
              label="Color"
              value={eventColor}
              onChange={(color) => setEventColor(color)}
            />

            <OutlinedInput type="submit" sx={{ wdith: "10%" }} />
          </FormControlUnstyled>

          <Button onClick={handleModal}>close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;
