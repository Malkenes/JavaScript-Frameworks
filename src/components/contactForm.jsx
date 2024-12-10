import { useForm } from "react-hook-form";
import { FullButton } from "./Button.styles";
import { FormInputContainer } from "./contactForm.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required(),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters")
      .required(),
    emailAddress: yup.string().email("Invalid email format").required(),
    body: yup
      .string()
      .min(3, "Message must be at least 3 characters")
      .required(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInputContainer>
        <label htmlFor="fullName">Full Name</label>
        <small>Required</small>
        <input
          id="fullName"
          placeholder="Your full name"
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
      </FormInputContainer>
      <FormInputContainer>
        <label htmlFor="subject">Subject</label>
        <small>Required</small>
        <input id="subject" placeholder="Subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
      </FormInputContainer>
      <FormInputContainer>
        <label htmlFor="emailAddress">Email</label>
        <small>Required</small>
        <input
          id="emailAddress"
          placeholder="Your email address"
          {...register("emailAddress")}
        />
        <p>{errors.emailAddress?.message}</p>
      </FormInputContainer>
      <FormInputContainer>
        <label htmlFor="body">Message</label>
        <small>Required</small>
        <textarea id="body" placeholder="Your message" {...register("body")} />
        <p>{errors.body?.message}</p>
      </FormInputContainer>
      <FullButton>Submit</FullButton>
    </form>
  );
}
