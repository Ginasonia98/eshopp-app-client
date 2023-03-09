import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box sx={{color:"white"}} marginTop="70px" padding="40px 0" backgroundColor="#3A98B9">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color="white"
          >
            Almighty Shop
          </Typography>
          <div sx={{color:"white"}}>
          This shop sells a variety of good, attractive, and inexpensive clothing products.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy & Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Call Center</Typography>
          <Typography mb="30px">Tracking Your Order</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Address : 49, Maldives Street. South Jakarta
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: shop123@gmail.com
          </Typography>
          <Typography mb="30px">Contact : (+62)1234-5678</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
