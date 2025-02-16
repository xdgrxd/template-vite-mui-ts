import { Box, useTheme } from "@mui/material";

interface IDefaultPage {
  children: React.ReactNode;
}

export const DefaultPage: React.FC<IDefaultPage> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.background.default} height="100vh">
      {children}
    </Box>
  );
};
