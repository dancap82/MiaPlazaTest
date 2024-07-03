describe('Miacademy Navigation and Form Test', () => {
  it('should navigate to MiaPrep Online High School and start the application process', () => {
    
    // Navigate to the main page
    cy.visit('https://miacademy.co/#/');
    
    // Click on the banner link to navigate to MiaPrep Online High School
    cy.get('*[class="mia-announcementText"]').contains('Online High School').click();
    
    // Click on the 'Apply to MOHS' button
    cy.get('*[class="wp-block-button"]').contains('Apply to Our School').click();
    
    // Fill in the Parent Information
    cy.get('input[complink="Name_First"]').type('John');
    cy.get('input[complink="Name_Last"]').type('Doe');
    cy.get('input[id="Email-arialabel"]').type('johndoe@example.com');
    cy.get('input[id="PhoneNumber"]').type('5555555555');
    cy.get('*[class="select2FormFont drpDwnPlaceholder"]').contains('-Select-').click();
    cy.get('*[class="select2-results__option"]').contains('No').click();
    cy.get('*[class="cusChoiceEm"]').contains('Miacademy website').click();
    
    cy.get('input[name="Date"]').click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()

    // Proceed to the student information 
    cy.get('*[type="button"]').contains('Next').click();

    // Assert last page was reached
    cy.get('*[class="advLabelName"]').should('contain', 'Student Information');
    cy.log('TEST ENDED SUCCESSFULLY');
    
  });
});