import "./loadingWeb.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingWeb = () => {
  return (
    <div className="container">
      <img src="../../logo-premier-e1611612815797.png" alt="" className="image" />
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default LoadingWeb;
