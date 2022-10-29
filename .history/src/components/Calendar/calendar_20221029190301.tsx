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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS, CREATE_POST } from "../../Post/Posts";
import "./calendar.css";
import { doReload } from "../../function/Reload";
import FriendList from "components/Friend/FriendList";
import { friends } from "components/Friend/FriendList";

const Calendar: React.FC = () => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventContent, setEventContent] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [eventDay, setEventDay] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const { data, error, loading } = useQuery(GET_POSTS);
  const [CreatePost] = useMutation(CREATE_POST);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
          length: posts.length + 1,
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
    <div>
      <div className="calendar">
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
            }) => {
              if (eventDay === post.date) {
                console.log("hi");
                return (
                  <li key={post.length}>
                    <EventLists
                      title={post.title}
                      content={post.content}
                      date={post.date}
                      id={post.length}
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
              <textarea
                value={eventContent}
                onChange={(e) => contentChange(e)}
              />
              <input type="submit" />
            </form>

            <Button onClick={handleModal}>close modal</Button>
          </Box>
        </Modal>
      </div>
      {!isMatch && <FriendList />}
    </div>
  );
};

export default Calendar;
