import React from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 10,
  },
  media: {
    height: 200,
  },
});

function CreateNote({ formData, setFormData, createNote, fileChange }) {
  const classes = useStyles();

  const handleDate = () => {
    var full = new Date();
    var final = full.toString().substr(0, 21);
    return final;
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Title"
          value={formData.name}
        />
        <Input
          multiline
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
              date: handleDate(),
            })
          }
          placeholder="Description"
          value={formData.description}
        />
        <Input type="file" onChange={fileChange} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={createNote}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreateNote;
