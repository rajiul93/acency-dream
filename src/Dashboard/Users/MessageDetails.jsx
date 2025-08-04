import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
const MessageDetails = ({details}) => {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
    return (
        <>
        <Button onClick={handleOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>User Email: </DialogHeader>
          <DialogBody >
           <div className="overflow-y-auto max-h-48">
           {details}
           </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            
          </DialogFooter>
        </Dialog>
      </>
    );
};

export default MessageDetails;