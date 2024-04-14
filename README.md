# Tax-Calculator


This project is a simple web-based tax calculator that calculates the tax based on the user's gross annual income, extra income, age group, and applicable deductions. It then displays the result to the user.

## Features

- Users can enter their gross annual income, extra income, age group, and applicable deductions.
- The tax is calculated based on the provided inputs and displayed to the user.
- Error handling:
  - Users are alerted if they enter incorrect values or leave mandatory fields empty.
  - Error icons are displayed beside the input fields with tooltips explaining the errors.
- Age group dropdown:
  - Users can select their age group from three options: <40, ≥ 40 & < 60, and ≥ 60.
- Modal:
  - After submitting the form, a modal appears displaying the calculated tax information.

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Fill out the form with the required information:
   - Gross annual income
   - Extra income (optional)
   - Age group
   - Applicable deductions (optional)
4. Click on the "Submit" button.
5. If any errors are present, hover over the error icons to view the error messages.
6. Review the tax calculation result displayed in the modal.
7. Click on the "Close" button to close the modal and return to the form.

## Implementation Details

- HTML (`index.html`):
  - Contains the form elements for inputting user data.
  - Utilizes tooltips and error indicators for user guidance.
- CSS (`styles.css`):
  - Defines the styling for the form and modal.
  - Implements error indicators and tooltips.
- JavaScript (`script.js`):
  - Handles form submission and data validation.
  - Calculates tax based on user input.
  - Stores and retrieves data using sessionStorage.
- Result Page (`result.html`):
  - Displays the tax calculation result in a modal.
  - Allows users to close the modal and return to the form.

## References & Requirements

- Tax calculation formula based on income and age groups.
- Error handling for incorrect input values.
- Mandatory age group selection.
- Implementation of tooltips and error icons.
- Modal display for tax calculation results.

Screenshots

Form ViEW
![Uploading Screenshot 2024-04-14 at 10.25.48 AM.png…]()

Error Handling
Result Modal
