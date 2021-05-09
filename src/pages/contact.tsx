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

const Input = styled('input')`
  grid-area: ${({ gridArea }) => gridArea};
  height: 44px;
  margin: 0 25px 25px 0;
  padding-left: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  ${theme.font.book}
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
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log('fire off req here');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Input placeholder="First name" gridArea="first" {...register("firstName")} />
        <Input placeholder="Last name" gridArea="last" {...register("lastName")} />
        <Input placeholder="Phone" gridArea="phone" {...register("phone")} />
        <Input placeholder="Email" gridArea="email" {...register("email")} />
        <Input placeholder="Company name" gridArea="company" {...register("companyName")} />
        <Input placeholder="Project name" gridArea="project" {...register("projectName")} />
        <Input placeholder="Brief description of your request." gridArea="details" {...register("details", { required: true })} />
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
            </LocationBlock>
          </HeaderContainer>
        </Spacing>
      </TopBlock>
    </Layout>
  )
};

export default ContactUs;
