import { Box, CardMedia, Paper, Typography, styled } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const CardTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "red-hat-display",
});

type JobCardPropss = {
  job: {
    id: string;
    title: string;
    location: string;
    description: string;
    data: string;
  };
};

function JobCard({ job }: JobCardPropss) {
  const { description, data, location, title } = job;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: { xs: "100%", md: "16rem", xl: "18rem" },
            height: { xs: "16rem", md: "16rem", xl: "18rem" },
            padding: "16px",
            borderRadius: "6px",
          },
        }}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
    
          }}
        >
          <Box display={"flex"} gap={"12px"}>
            <CardMedia
              component={"img"}
              image={"/logo512.png"}
              alt="tste"
              sx={{ width: "64px", height: "64px" }}
            />

            <Box sx={{ overflow: "hidden" }}>
              <CardTitle variant="h6">{title}</CardTitle>
              <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                <FmdGoodOutlinedIcon fontSize="small" />
                <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "14px",
                fontFamily: "red-hat-display",
              }}
            >
              {description.slice(0, 150) + "..."}
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h6"
              fontSize={"14px"}
              paddingX={"4px"}
              color={"#6b7280"}
            >
              Período de disponibilidade
            </Typography>
            <Typography
              variant="body1"
              bgcolor={"#1d4fd826"}
              color={"#1d4fd8"}
              fontSize={"14px"}
              fontFamily={"red-hat-display"}
              sx={{
                borderRadius: "4px",
                fontWeight: "600",
                fontFamily: "red-hat-display",
              }}
            >
              {data}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default JobCard;
