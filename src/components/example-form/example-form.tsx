import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

import { addUser } from "~/libs/redux/example-slice";
import { useAppDispatch, useAppSelector } from "~/libs/redux/example-hooks";

type FormData = {
	firstName: string;
	lastName: string;
};

const ExampleForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const userList = useAppSelector((state) => state.user.list);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<FormData>({
		mode: "onBlur",
	});
	const onSubmit = handleSubmit(({ firstName, lastName }) => {
		dispatch(addUser({ firstName, lastName }));
		reset();
	});

	return (
		<Container maxWidth="sm">
			<Box component="form" onSubmit={onSubmit} noValidate>
				<Typography variant="h6">
					{t("ExampleComponent.firstName")}
				</Typography>
				<TextField
					fullWidth
					margin="normal"
					{...register("firstName", {
						required: t("ExampleComponent.thisFieldRequired"),
						minLength: {
							value: 3,
							message: t("Min 3 symbols"),
						},
					})}
					error={!!errors.firstName}
				/>
				{errors.firstName && (
					<FormHelperText error>
						{errors.firstName.message}
					</FormHelperText>
				)}
				<Typography variant="h6">
					{t("ExampleComponent.lastName")}
				</Typography>
				<TextField
					fullWidth
					margin="normal"
					{...register("lastName", {
						required: t("ExampleComponent.thisFieldRequired"),
						minLength: {
							value: 3,
							message: t("Min 3 symbols"),
						},
					})}
					error={!!errors.lastName}
				/>
				{errors.lastName && (
					<FormHelperText error>
						{errors.lastName.message}
					</FormHelperText>
				)}
				<Button
					variant="contained"
					color="primary"
					type="submit"
					disabled={!isValid}
					sx={{ mt: 3 }}
				>
					{t("ExampleComponent.submit")}
				</Button>
			</Box>
			{userList.map((user) => (
				<Typography
					key={user.firstName}
				>{`${user.firstName} ${user.lastName}`}</Typography>
			))}
		</Container>
	);
};

export { ExampleForm };
