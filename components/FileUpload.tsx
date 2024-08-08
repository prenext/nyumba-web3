import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

interface FileUploadProps {
  label: string;
  name: string;
  maxFileSize?: number;
  formState?: any;
}

const FileDropZone: React.FC<{
  children: React.ReactNode;
  sx?: object;
  onClick: () => void;
}> = ({ children, sx, onClick }) => (
  <Card
    variant="outlined"
    onClick={onClick}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "3px dashed",
      p: 2,
      boxShadow: "none",
      borderColor: "grey.300",
      width: "100%",
      minHeight: 150,
      cursor: "pointer",
      ...sx,
    }}
  >
    {children}
  </Card>
);

const MultiFileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  maxFileSize = 10485760, // 10MB default
  formState,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps, open } = useDropzone({
    maxSize: maxFileSize,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    noClick: true, // Disables the built-in click behavior
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleRemoveFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const renderPreview = (file: File) => (
    <Box
      key={file.name}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        m: 1,
      }}
    >
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "white",
        }}
        onClick={() => handleRemoveFile(file)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );

  const error = formState?.errors?.find(
    (error: { path: string }) => error.path === name
  );

  function handleInputClick(
    event: React.MouseEvent<HTMLDivElement>
  ): void {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  }

  return (
    <FormControl sx={{ my: 2 }} error={!!error} fullWidth>
      <Box {...getRootProps()} onClick={handleInputClick}>
        <FormLabel>{label}</FormLabel>
        <FileDropZone {...getRootProps()} onClick={open}>
          <input
            {...getInputProps()}
            name={name}
            ref={hiddenFileInput}
            onClick={() => {
              if (hiddenFileInput.current) {
                hiddenFileInput.current.value = "";
              }
            }}
            style={{ display: "none" }}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <ImageIcon color="action" fontSize="large" />
            <Typography>
              Drag & drop some files here, or click to select files
            </Typography>
          </Box>
        </FileDropZone>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={2}
          width="100%"
        >
          {files.map((file) => renderPreview(file))}
        </Box>
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </Box>
    </FormControl>
  );
};

export default MultiFileUpload;
