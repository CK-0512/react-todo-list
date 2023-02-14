import { TextField } from "@mui/material";

export default function WritePage() {
  return (
    <>
      <div className="flex-1 flex p-10 flex-col gap-7">
          <TextField label="언제 해야 하나요?" focused type="datetime-local" />
          <TextField 
          label="무엇을 해야 하나요?" 
          className="flex-1 flex" 
          InputProps={{className : "flex-1 flex-col"}} 
          inputProps={{className : "flex-1"}}
          multiline
          />
      </div>
    </>
  );
}