describe('Blog Page', () => {
    it('should load the blog page and display articles', () => {
      cy.visit('/blog'); // Visit the blog page
      cy.contains('Stay Updated with the Latest trends in Tobams Group').should('be.visible'); // Check page title
      cy.get('[data-testid="article-card"]').should('have.length.greaterThan', 0); // Check if articles are displayed
    });
  
    it('should filter articles based on search input', () => {
      cy.visit('/blog');
      cy.get('input[placeholder="Search"]').type('Test Article'); // Type in the search input
      cy.get('[data-testid="article-card"]').should('have.length', 1); // Check if only one article is displayed
    });
  
    it('should navigate to article details page', () => {
      cy.visit('/blog');
      cy.get('[data-testid="article-card"]').first().click(); // Click the first article
      cy.url().should('include', '/blog/'); // Check if URL includes the article slug
      cy.contains('Test Article').should('be.visible'); // Check if article title is displayed
    });
  });