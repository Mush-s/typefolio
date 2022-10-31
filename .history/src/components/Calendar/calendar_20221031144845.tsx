import { useEffect, useState } from "react";
import EventLists from "./EventLists";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS, CREATE_POST } from "../../Prisma/Post";
import styles from "../../../styles/calendar.module.css";
import { doReload } from "../../function/Reload";

const Calendar: React.FC = () => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventContent, setEventContent] = useState<string>("");
  const [eventDay, setEventDay] = useState<string>("");
  const [eventRelation, setEventRelation] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const { data, error, loading } = useQuery(GET_POSTS);
  const [CreatePost] = useMutation(CREATE_POST);

  const today1 = new Date();

  console.log(today);

  const year = today1.getFullYear();
  const month = today1.getMonth();
  const day = today1.getDay();

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
          relation: eventRelation,
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
        eventColor={posts.relation}
      />
      <h2>
        {eventDay}
        {eventDay && <Button onClick={handleModal}>Add</Button>}
      </h2>
      <ul>
        {posts.map(
          (post: {
            length: number;
            relation: string | undefined;
            title: string | undefined;
            content: string | undefined;
            date: string | undefined;
          }) => {
            if (eventDay === post.date) {
              return (
                <li key={post.length}>
                  <EventLists
                    id={post.length}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    relation={post.relation}
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
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => titleChange(e)}
            />
            <textarea value={eventContent} onChange={(e) => contentChange(e)} />
            <input
              type="text"
              value={eventRelation}
              onChange={(e) => setEventRelation(e.target.value)}
            />

            <input type="submit" />
          </form>

          <Button onClick={handleModal}>close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;