import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BlogImage from "../static/Blog.jpg";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth: 400,
    margin: 10,
  },
  media: {
    height: 200,
  },
  actions: {
    justifyContent: "center",
    margin: 15,
  },
});

function DiaryCard({ note, deleteNote, updateNote, setShowForm }) {
  const classes = useStyles();
  const history = useHistory();
  var { imageUrl, name, date } = note;

  const routeToBlog = () => {
    localStorage.setItem("note", note);
    history.push({ pathname: "/blog", note });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => routeToBlog()}>
        <CardMedia
          className={classes.media}
          image={imageUrl ? imageUrl : BlogImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            Last Updated: {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setShowForm(true);
            updateNote(note);
          }}
        >
          <EditIcon />
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => deleteNote(note)}>
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default DiaryCard;
