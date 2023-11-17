import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

function Products() {
  let [tableAll, setTableAll] = useState([]);
  let [isAdmin, setIsAdmin] = useState(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stockCount, setStockCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://655619fa84b36e3a431f0abd.mockapi.io/product")
      .then((res) => {
        setTableAll(res.data);
      });
  }, []);
  console.log(tableAll);
  return (
    <>
      <TableContainer>
        <Table variant="striped">
          <Thead style={{ backgroundColor: "pink" }}>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>discontinued</Th>
              <Th>unitsInStock</Th>
              <Th>Edit Button</Th>
              <Th>Delete Button</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableAll.map((elem, i) => {
              return (
                <Tr
                  key={i}
                  style={{
                    color: elem.stockCount < 10 ? "red" : "black",
                  }}
                >
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td>{elem.price}</Td>
                  <Td style={{ color: elem.sale ? "green" : "black" }}>
                    {elem.sale ? "TRUE" : "FALSE"}
                  </Td>
                  <Td>{elem.stockCount}</Td>
                  <Td>
                    {" "}
                    <Button colorScheme="orange">Edit</Button>
                  </Td>
                  <Td>
                    {" "}
                    <Button
                      colorScheme="red"
                      onClick={(e) => {
                        console.log(e.target);
                        console.log(elem.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot style={{ backgroundColor: "pink" }}>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>discontinued</Th>
              <Th>unitsInStock</Th>
              <Th>Edit Button</Th>

              <Th>Delete Button</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <FormControl
        isRequired
        style={{
          padding: "35px",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          margin: "50px auto",
        }}
      >
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Product name"
          style={{ marginBottom: "15px" }}
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />

        <FormLabel>Price</FormLabel>
        <Input
          placeholder="Product price"
          style={{ marginBottom: "15px" }}
          value={price}
          onChange={(e) => {
            console.log(e.target.value);
            setPrice(e.target.value);
          }}
        />
        <FormLabel>stockCount</FormLabel>
        <Input
          placeholder="Product stockCount"
          style={{ marginBottom: "15px" }}
          value={stockCount}
          onChange={(e) => {
            console.log(e.target.value);
            setStockCount(e.target.value);
          }}
        />
        <Button
          colorScheme="whatsapp"
          type="submit"
          onClick={() => {
            setLogin(true);
            let obj = {
              name: name,
              price: price,
              stockCount: stockCount,
            };
            setName("");
            setPrice("");
            setStockCount("");
            axios.post(
              "https://655619fa84b36e3a431f0abd.mockapi.io/users",
              obj
            );
          }}
        >
          Add
        </Button>
      </FormControl>
    </>
  );
}

export default Products;
