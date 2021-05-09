import * as React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { theme } from '../theme';

const Title = styled('h1')`
  width: 260px;
  font-size: 30px;

  ${theme.font.heavy}
`;

const Description = styled('p')`
  font-size: 20px;
  padding-right: 4.2rem;
  margin-bottom: 2.2rem;

  ${theme.font.book}
`;

const TopBlock = styled('section')`
  background-color: #ebeaee;
  color: ${theme.color.black};
`;

const HeaderContainer = styled('div')`
  display: flex;
  padding: 60px 0;
`;

const TextBlock = styled('div')`
  display: flex;
  flex: 5;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
`;

const LocationBlock = styled('section')`
  flex: 2;
`;

const Spacing = styled('div')`
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};
`;

const LocationTitle = styled('p')`
  margin-bottom: 16px;
  font-size: 20px;

  ${theme.font.heavy}
`;

const LocationDescription = styled('p')`
  font-size: 14px;

  ${theme.font.book}
`;

const MailToLink = styled('a')`
  text-decoration: none;
`;

const FormContainer = styled('div')`
  display: grid;
  grid-template-areas:
    "first last"
    "phone email"
    "company project"
    "details details"
    ". submit";
`;

const FormItemStyle = ({ gridArea, invalid }) => `
  grid-area: ${gridArea};
  height: 44px;
  margin: 0 25px 25px 0;
  padding-left: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  outline-color: red;
  outline-offset: 0px;
  outline-style: auto;
  outline-width: ${invalid ? '1px' : '0'};

  ${theme.font.book}
`

const Input = styled('input')`
  ${({ gridArea, invalid }) => FormItemStyle({ gridArea, invalid })};
`;

const Textarea = styled('textarea')`
  ${({ gridArea, invalid }) => FormItemStyle({ gridArea, invalid })};

  height: 165px;
  padding: 15px;
  resize: vertical;
`;

const Submit = styled('input')`
  grid-area: submit;
  padding: 7px 18px;
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
  font-size: 16px;
  border: none;
  border-radius: 20px;
  margin: 3px 25px 0 0;
  cursor: pointer;
  width: 150px;
  justify-self: end;

  &:hover {
    background-color: ${theme.color.activeOrange};
  }

  ${theme.font.heavy}
`;

const EmailForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onTouched',
    shouldFocusError: true
  });
  const onSubmit = data => console.log('fire off req here');
  console.log('errors', errors.email)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Input placeholder="First name" gridArea="first" invalid={errors.firstName} {...register("firstName", { required: true })} />
        <Input placeholder="Last name" gridArea="last" invalid={errors.lastName} {...register("lastName", { required: true })} />
        <Input placeholder="Phone - Optional" gridArea="phone" {...register("phone")} />
        <Input placeholder="Email" gridArea="email" invalid={errors.email} {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        <Input placeholder="Company name - Optional" gridArea="company" {...register("companyName")} />
        <Input placeholder="Project name - Optional" gridArea="project" {...register("projectName")} />
        <Textarea placeholder="Brief description of your request." gridArea="details" invalid={errors.details} {...register("details", { required: true })} />
        {errors.description && <span>This field is required</span>}
        <Submit type="submit" />
      </FormContainer>
    </form>
  );
};

const ContactUs = (props) => {
  return (
    <Layout>
      <Seo title="Contact us" />
      <TopBlock>
        <Spacing>
          <HeaderContainer>
            <TextBlock>
              <Title>Contact us</Title>
              <Description><strong>Fill out this form</strong> or email <MailToLink href="mailto:contact@baypress.com">contact@baypress.com</MailToLink>.</Description>
              <EmailForm />
            </TextBlock>
            <LocationBlock>
              <LocationTitle>We are located at</LocationTitle>
              <LocationDescription>568 South Milpitas Blvd.<br></br>Milpitas, CA 95035</LocationDescription>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.4659513923857!2d-121.89650368504046!3d37.42609597982444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fced1bb864b31%3A0xed4a5c25a6842da1!2s568%20S%20Milpitas%20Blvd%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1620576565781!5m2!1sen!2sus" width="250" height="250" style={{ border: '0' }} loading="lazy" />
            </LocationBlock>
          </HeaderContainer>
        </Spacing>
      </TopBlock>
    </Layout>
  )
};

export default ContactUs;