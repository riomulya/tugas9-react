import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Breadcrumb,
  Spinner,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
} from "react-bootstrap";

function App() {
  return (
    <>
      <header>
        <Container fluid className="p-0">
          <Navbar bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Berita</Nav.Link>
                <Nav.Link href="#">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Transfer Pemain</Nav.Link>
                <Nav.Link href="#">Tim</Nav.Link>
                <Form className="d-flex" style={{ marginLeft: "590px" }}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Nav>
            </Container>
          </Navbar>
          <Row>
            <Col md={8}></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Liga Inggris
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </header>
      <body>
        <Container className="mt-5 w-75">
          <>
            <center>
              <Row>
                <Col>
                  <h4>Rumor Transfer Pemain</h4>
                </Col>
                <Col md={6}></Col>
                <Col>
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="grow" variant="success" />
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col>
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3 justify-content-between"
                  >
                    <Tab
                      eventKey="home"
                      title="Semua Transfer"
                      style={{ width: "16" }}
                    >
                      <hr />
                      <Table hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nama Pemain</th>
                            <th>Tim</th>
                            <th>Transfer</th>
                            <th>Proses transfer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>MAROUANE FELLAINI</td>
                            <td>MANCHESTER UNITED</td>
                            <td>SHANDONG LUNENG</td>
                            <td>
                              <ProgressBar animated now={85} label="85" />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>LUIS NANI</td>
                            <td>SPORTING CP</td>
                            <td>ORLANDO CITY</td>
                            <td>
                              <ProgressBar animated now={55} label="55" />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>MAREK HAMSIK</td>
                            <td>NAPOLI</td>
                            <td>DALIAN YIFANG</td>
                            <td>
                              <ProgressBar animated now={95} label="95" />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>SARDAR HASMOUN</td>
                            <td>RUBIN KAZAN</td>
                            <td>ZENITH ST PETERSBUG</td>
                            <td>
                              <ProgressBar animated now={100} label="100" />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>MITCHY BATSCHUASI</td>
                            <td>CHELSEA</td>
                            <td>CRYSTAL PALACE</td>
                            <td>
                              <ProgressBar animated now={50} label="50" />
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>LUCAS PIAZON</td>
                            <td>CHELSEA</td>
                            <td>CIEVO</td>
                            <td>
                              <ProgressBar animated now={100} label="100" />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                      </Pagination>
                      <div className="d-flex">
                        <Button>Informasi</Button>
                        <Button className="ms-2">Versi Website</Button>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Liga Primer Inggris"></Tab>
                    <Tab eventKey="1" title="Serie A"></Tab>
                    <Tab eventKey="2" title="Divisi Primera"></Tab>
                    <Tab eventKey="3" title="Bundes Liga"></Tab>
                    <Tab eventKey="4" title="Liga 1 Indonesia "></Tab>
                  </Tabs>
                </Col>
              </Row>
            </center>
          </>
        </Container>
      </body>
    </>
  );
}

export default App;
