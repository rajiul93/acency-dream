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
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
           {details}
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