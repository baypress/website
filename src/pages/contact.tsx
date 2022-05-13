import { useForm, ValidationError } from '@formspree/react';
import React, { useRef, useState } from 'react';
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

  @media only screen
    and (max-width: 748px) {
    flex-direction: column;
  }
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

  @media only screen
    and (max-width: 748px) {
    grid-template-areas:
    "first first"
    "last last"
    "phone phone"
    "email email"
    "company company"
    "project project"
    "details details"
    ". submit";
  }
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
  cursor: ${({ disabled }) => disabled ? 'unset' : 'pointer'};
  width: 150px;
  justify-self: end;
  opacity: ${({ disabled }) => disabled ? 0.3 : 1};

  &:hover {
    background-color: ${({ disabled }) => disabled ? theme.color.orange : theme.color.activeOrange};
  }

  ${theme.font.heavy}
`;

const ContactSuccess = styled('h1')`
  align-self: center;
  color: #ffc77a;

  ${theme.font.heavy}
`;

const EmailForm = ({ handleSubmit, isSubmitting, errors }) => {
  const [isEmailValid, setEmailValidity] = useState(false);
  const emailInput = useRef();

  const submit = e => {
    if (emailInput && emailInput.current) {
      // @ts-ignore
      const emailValid = validateEmail(emailInput.current.value);
      setEmailValidity(emailValid);

      handleSubmit(e);
    }
  }

  const onChange = (e) => {
    const email = e.target.value;
    const isValid = validateEmail(email);

    setEmailValidity(isValid);
  };

  const validateEmail = email => !!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

  return (
    <form onSubmit={submit}>
      <FormContainer>
        <Input id="firstName" name="firstName" placeholder="First name" gridArea="first" />
        <Input id="lastName" name="lastName" placeholder="Last name" gridArea="last" />
        <Input id="phone" name="phone" type="tel" placeholder="Phone - Optional" gridArea="phone" />
        <Input id="email" ref={emailInput} name="email" type="email" onChange={onChange} invalid={!isEmailValid} placeholder="Email" gridArea="email" />
        <Input id="company" name="company" placeholder="Company name - Optional" gridArea="company" />
        <Input id="project" name="project" placeholder="Project name - Optional" gridArea="project" />
        <Textarea id="details" name="details" placeholder="Brief description of your request." gridArea="details" />
        <Submit type="submit" disabled={isSubmitting || !isEmailValid} />
      </FormContainer>
    </form>
  );
};

const ContactUs = (props) => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORM_SPREE_PROJECT_ID);

  return (
    <Layout>
      <Seo title="Contact us" />
      <TopBlock>
        <Spacing>
          <HeaderContainer>
            <TextBlock>
              {state.succeeded ? (
                <ContactSuccess>Thanks for reaching out!</ContactSuccess>
              ) : (
                <>
                  <Title>Contact us</Title>
                  <Description><strong>Fill out this form</strong> or email <MailToLink href="mailto:contact@baypress.com">contact@baypress.com</MailToLink>.</Description>
                  <EmailForm handleSubmit={handleSubmit} isSubmitting={state.submitting} errors={state.errors} />
                </>
              )}
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
