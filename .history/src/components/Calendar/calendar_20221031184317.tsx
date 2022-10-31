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

  const options = [
    { label: "red", id: 1 },
    { label: "blue", id: 2 },
  ];
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

  console.log(posts);
  const handleDateClick = (arg: DateClickArg) => {
    setEventDay(arg.dateStr);
  };

  function titleChange(e: { target: { value: React.SetStateAction<string> } }) {
    setEventTitle(e.target.value);
  }
  function contentChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setEventContent(e.target.value);
  }
  function handleModal() {
    setOpen(!open);
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = eventDay.length && eventTitle.length >= 1;
    if (isValid) {
      CreatePost({
        variables: {
          title: eventTitle,
          content: eventContent,
          date: eventDay,
          color: eventColor,
          length: 1 + Math.floor(Math.random() * 100000),
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
        dateClick={handleDateClick}
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
        <Box style={{ backgroundColor: "white" }}>
          <Typography>{eventDay}</Typography>
          <form onSubmit={(e) => submitHandler(e)}>
            <TextField
              type="text"
              value={eventTitle}
              label="Title"
              onChange={(e) => titleChange(e)}
            />
            <TextField
              value={eventContent}
              label="Context"
              onChange={(e) => contentChange(e)}
            />
            <Autocomplete
              options={options}
              sx={{ width: 390 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Color"
                  onChange={(e) => setEventColor(e.target.value)}
                />
              )}
            />
            <OutlinedInput type="submit" />
          </form>

          <Button onClick={handleModal}>close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;

{
  /* <input
              className="input-color"
              type="color"
              value={eventColor}
              onChange={(e) => setEventColor(e.target.value)}
              list="data"
            />
            <datalist id="data"></datalist> */
}
