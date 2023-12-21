import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

function ProductReviewCard() {
  return (
    <div className="text-left">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              {"R"}
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-50">April 15, 2023</p>
            </div>
          </div>
          <Rating value={2.5} name="half-rating" readOnly precision={.5} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            perferendis cum nesciunt veniam aliquam, eveniet ut minima voluptate
            maxime, commodi quia, dolores nostrum accusamus maiores amet saepe
            aut. Enim, dicta.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
