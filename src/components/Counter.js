import { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  const [sum, setSum] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Regex to validate if the input is number or not
    const regex = /^[0-9\b]+$/;

    if (!firstInput || !secondInput) {
      setSum("");
      return toast.error("Fields can't be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // if value is not blank, then test the regex
    if (secondInput === "" || regex.test(secondInput)) {
      const total = parseInt(firstInput) + parseInt(secondInput);
      setSum(total);
      setFirstInput("");
      setSecondInput("");
    } else {
      toast.error("Please enter a valid number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDecrement = (e) => {
    if (sum === 0) return sum;

    setSum((prevVal) => {
      return prevVal - 1;
    });
  };

  const handleIncrement = (e) => {
    setSum((prevVal) => {
      return prevVal + 1;
    });
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              sx={{ my: 2, mr: 1 }}
              size="small"
              variant="outlined"
              type="Number"
              placeholder="Enter first number"
              value={firstInput}
              onChange={(e) => setFirstInput(parseInt(e.target.value))}
            />

            <TextField
              sx={{ my: 2 }}
              size="small"
              variant="outlined"
              type="input"
              placeholder="Enter second number"
              value={secondInput}
              onChange={(e) => setSecondInput(e.target.value)}
              s
            />

            <div>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                fullWidth
              >
                Add
              </Button>

              {/* Toaster Component to throw alerts*/}
              <ToastContainer />
            </div>
          </form>
          <div style={{ marginTop: 32 }}>
            {sum >= 1 && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleIncrement}
                  startIcon={<AddIcon />}
                  sx={{ fontSize: 12 }}
                >
                  Increment
                </Button>

                <Button sx={{ m: "2rem" }}>
                  {sum && (
                    <>
                      <Typography variant="h2" color="success">
                        {sum}
                      </Typography>
                    </>
                  )}
                </Button>

                <Button
                  variant="contained"
                  onClick={handleDecrement}
                  color="secondary"
                  startIcon={<RemoveIcon />}
                  sx={{ fontSize: 12 }}
                >
                  Decrement
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Counter;
