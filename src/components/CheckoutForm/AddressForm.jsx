import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First Name" />
            <CustomTextField required name="lastName" label="Last Name" />
            <CustomTextField required name="address1" label="Address" />
            <CustomTextField required name="email" label="Email" />
            <CustomTextField required name="city" label="city" />
            <CustomTextField required name="zip" label="ZIP / Postal code" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
