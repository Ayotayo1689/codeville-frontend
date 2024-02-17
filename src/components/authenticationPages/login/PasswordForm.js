import React from "react";
import { Field, Form, Formik } from "formik";
import {
    Box,
    Flex,
    FormControl,
    Input,
    Text,
    useToast,
    Button,
} from "@chakra-ui/react";
import axiosInstance from "../../../utils/config";
import * as Yup from "yup";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/user/userSlice";
const LoginFormSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters long")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
        ),
});

function LoginForm() {
    const toast = useToast({
        position: "top",
    });
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={LoginFormSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    // const response = await axiosInstance.post("/auth/login/", values);
                    // toast({
                    // 	title: "Thank you!",
                    // 	description: "We will be in touch with you shortly",
                    // 	status: "success",
                    // 	duration: 5000,
                    // 	isClosable: true,
                    // });
                    await dispatch(loginUser(values));
                    setSubmitting(false);
                    //
                } catch (error) {
                    console.error(error);
                    setSubmitting(false);

                    toast({
                        title: "An error occurred",
                        description:
                            "There was an error submitting your form. Please try again.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                    resetForm();
                }
            }}
        >
            {({ errors, touched, setFieldValue, values, isSubmitting }) => (
                <Form>
                    <Field name="password">
                        {({ field }) => (
                            <FormControl mb={"1rem"} mt={"1rem"}>
                                <Flex justifyContent={"space-between"}>
                                    <Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
                                        Enter password
                                    </Text>
                                </Flex>
                                <Input {...field} id="password" placeholder="..........." type="password"/>
                                {errors.password && touched.password ? (
                                    <Box color={"red"}>{errors.password}</Box>
                                ) : null}
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        mt={"1rem"}
                        width={"100%"}
                        height={"2.375rem"}
                        bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
                        color={"white"}
                        type="submit"
                    >
                        Continue
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
export default LoginForm;
