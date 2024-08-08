import * as React from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { toast } from "react-toastify";

interface AvatarUploadProps {
  label?: string;
  name: string;
  icon?: React.ReactElement;
  maxFileSize?: number;
  avatarWidth?: number;
  defaultAvatarSrc?: string;
  avatarHeight?: number;
  avatarBorderRadius?: string;
  formState?: any; // Assuming this is your form state object
}

export const AvatarDropZone: React.FC<
  CardProps & {
    icon?: React.ReactElement;
    avatarWidth?: number;
    avatarHeight?: number;
    avatarBorderRadius?: string;
  }
> = ({
  icon,
  avatarWidth,
  avatarHeight,
  avatarBorderRadius,
  children,
  sx,
  ...other
}) => (
  <Card
    variant="outlined"
    {...other}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: avatarWidth ?? 100,
      height: avatarHeight ?? 100,
      borderRadius: avatarBorderRadius ?? "50%",
      border: "3px dashed",
      justifyContent: "center",
      borderColor: "rgba(0, 0, 0, 0.23)",
      position: "relative",
      ...sx,
    }}
  >
    {children}
  </Card>
);

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  label,
  name,
  icon,
  maxFileSize = 10485760, // 10MB default
  avatarWidth,
  avatarHeight,
  avatarBorderRadius,
  defaultAvatarSrc,
  formState,
}) => {
  const [file, setFile] = React.useState<File | null>(null);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    maxSize: maxFileSize,
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    onDrop: (acceptedFiles) => {
      const newFile = acceptedFiles[0];
      setFile(newFile);
    },
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          toast.error(error.message);
        });
      });
    },
  });

  const handleInputClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files && event.target.files[0];
    if (newFile) {
      setFile(newFile);
    }
  };

  React.useEffect(() => {
    if (isDragReject) {
      toast.error("File type not supported");
    }
  }, [isDragReject]);

  const error =
    formState?.errors?.find(
      (error: { path: string }) => error.path === `${name}.type`
    ) ||
    formState?.errors?.find(
      (error: { path: string }) => error.path === `${name}.size`
    ) ||
    formState?.errors?.find((error: { path: string }) => error.path === name);

  const renderPreview = (file: File) => (
    <img
      src={URL.createObjectURL(file)}
      alt={file.name}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: avatarBorderRadius ?? "50%",
        objectFit: "cover",
      }}
    />
  );

  return (
    <FormControl sx={{ my: 2 }} error={!!error}>
      <Box display="flex" flexDirection="row" gap={3}>
        <Box {...getRootProps()} onClick={handleInputClick}>
          <AvatarDropZone
            icon={icon}
            avatarWidth={avatarWidth}
            avatarHeight={avatarHeight}
            avatarBorderRadius={avatarBorderRadius}
          >
            {file ? (
              renderPreview(file)
            ) : defaultAvatarSrc ? (
              <img
                src={defaultAvatarSrc}
                alt="Default Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: avatarBorderRadius ?? "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: avatarBorderRadius ?? "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  fontSize: "2.5rem",
                }}
              >
                <ImageIcon color="inherit" fontSize="large" />
              </Box>
            )}
            {!label && (
              <IconButton
                aria-label="upload new picture"
                size="small"
                color="primary"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: "70%",
                  top: "70%",
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            )}
          </AvatarDropZone>
          <input
            type="file"
            name={name}
            ref={hiddenFileInput}
            onChange={handleInputChange}
            style={{ display: "none" }}
          />
        </Box>
        {label && (
          <Box py={2}>
            <FormLabel>{label}</FormLabel>
            <Typography variant="body2">
              Drop an image here or click to select
            </Typography>
          </Box>
        )}
      </Box>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default AvatarUpload;
