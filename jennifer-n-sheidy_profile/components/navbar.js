<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Jennifer Sheidy Wolfson Resume</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>About</MenuItem>
      <MenuItem eventKey={3.2}>My PorPortfolio</MenuItem>
      <MenuItem eventKey={3.3}>Personal</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Wordpress Blog</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>;

export Navbar