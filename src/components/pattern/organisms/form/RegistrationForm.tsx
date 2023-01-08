import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SubmitHandler, UseFormReset } from "react-hook-form/dist/types";

export type RegistrationFormProps = {
  onSubmit: (
    formFields: RegistrationFormFields,
    formReset?: UseFormReset<RegistrationFormFields>
  ) => void;
};

type RegistrationFormFields = {
  name: string;
  fatherName: string;
  email: string;
  phone: string;
  cnic: string;
  fatherCnic: string;
  address: string;
  dob: string;
  gender: string;
  qualification: string;
  city: string;
  course: string;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control, reset } = useForm<RegistrationFormFields>({
    defaultValues: {
      name: "",
      fatherName: "",
      email: "",
      phone: "",
      cnic: "",
      fatherCnic: "",
      address: "",
      dob: "",
      gender: "",
      qualification: "",
      city: "",
      course: "",
    },
  });

  const formSubmitHandler: SubmitHandler<RegistrationFormFields> = (e) => {
    onSubmit(e, reset);
  };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      spacing={2}
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      <Grid item xs={4}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField label="Full name" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="fatherName"
          control={control}
          render={({ field }) => (
            <TextField label="Father name" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField label="Email" type="email" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField label="Phone no" type="tel" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="cnic"
          control={control}
          render={({ field }) => (
            <TextField label="CNIC" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="fatherCnic"
          control={control}
          render={({ field }) => (
            <TextField label="Father's CNIC" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField label="Address" fullWidth {...field} />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => <TextField type="date" fullWidth {...field} />}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <TextField label="Select gender" select fullWidth {...field}>
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="qualification"
          control={control}
          render={({ field }) => (
            <TextField label="Last Qualification" select fullWidth {...field}>
              <MenuItem value={1}>Grades 5-8</MenuItem>
              <MenuItem value={2}>Matric</MenuItem>
              <MenuItem value={3}>InterMediate</MenuItem>
              <MenuItem value={4}>Undergradute</MenuItem>
              <MenuItem value={5}>Gradute</MenuItem>
              <MenuItem value={6}>Masters</MenuItem>
              <MenuItem value={7}>PHD</MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField label="Select City" select fullWidth {...field}>
              <MenuItem value={1}>Karachi</MenuItem>
              <MenuItem value={2}>Hyderabad</MenuItem>
              <MenuItem value={3}>Faisalabad</MenuItem>
              <MenuItem value={4}>Lahore</MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="course"
          control={control}
          render={({ field }) => (
            <TextField label="Select Course" select fullWidth {...field}>
              <MenuItem value={1}>Python</MenuItem>
              <MenuItem value={2}>Web and App Crash Course</MenuItem>
              <MenuItem value={3}>TypeScript</MenuItem>
              <MenuItem value={4}>
                Web And Mobile Hybrid App Develpment
              </MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
