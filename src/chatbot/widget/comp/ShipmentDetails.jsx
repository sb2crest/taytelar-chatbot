import React, { useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const ShipmentDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        width: "240px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        overflowY: isExpanded ? "auto" : "hidden",
        maxHeight: isExpanded ? "400px" : "80px",
        transition: "max-height 0.3s ease",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>
        SHIPMENT DETAILS
      </Typography>
      <Divider sx={{ marginBottom: "8px" }} />
      <Grid container direction="column" spacing={1}>
        {/* Example of shipment detail, repeat for each step */}
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "green",
                marginRight: "8px",
              }}
            />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Order Confirmed
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                Your order has been placed.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px", color: "gray" }}>
                Tue, 20th Aug 24 - 10:40am, New Delhi
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Repeat the above Grid item for each shipment step */}
      </Grid>
      <Typography
        variant="body2"
        sx={{
          color: "brown",
          textAlign: "right",
          marginTop: "8px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={handleToggleExpand}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Typography>
    </Box>
  );
};

export default ShipmentDetails;
