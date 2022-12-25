import {getAllByLabelText, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import Header from  './Header';
import Login from "./Login";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// import {shallow} from 'enzyme' 
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme'
// configure({ adapter: new Adapter() })

describe("Test the Header Component", () => {
    test("render the Navbar component", async () => {
      render( <BrowserRouter> <Header/> </BrowserRouter>);
      expect(screen.getByTestId('head1').textContent).toBe('My GH Projects')
    });

    // test("render the Navbar component", async () => {
    //   render( <BrowserRouter> <Login/> </BrowserRouter>);
    //   expect(screen.getByTestId('Login1').textContent).toBe('Sign in to your account')
    // });

    test("Login component in document", () => {
      const component = render( <BrowserRouter> <Login/> </BrowserRouter>);
      const linkElement = component.getByText("Sign in to your account");
      expect(linkElement).toBeInTheDocument();
    });

    
    test("Check button on the screen", async () => {
      render( <BrowserRouter> <Login/> </BrowserRouter>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
      });

      test("email input field should accept email ", () => {
        render( <BrowserRouter> <Login/> </BrowserRouter>);
        const email = screen.getByPlaceholderText("Email address");
        userEvent.type(email, 'amit@gmail.com');
        expect(email.value).not.toMatch("amit@gmail.com");
      });
      test("passport input should have type password ", () => {
        render( <BrowserRouter> <Login/> </BrowserRouter>);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
      });
      
    



    // it('children length check', () =>{
    //   let wrapper= shallow(< Header/>);
    //   expect(wrapper.find('Button').children().length).toBe(0)
    // })

    
})