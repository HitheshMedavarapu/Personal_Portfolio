import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const certifications = [
	{
		title: "Flower Identification and Classification using Deep Learning",
		date: "Published on May 2021",
		icon: faBrain,
		link: "https://ieeexplore.ieee.org/document/9752231", // Link to redirect
	},
];

const CertificationsComponent = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "50vh",
				padding: 4,
			}}
		>
			<Box sx={{ textAlign: "center", maxWidth: "600px" }}>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						marginBottom: 4,
						"&::after": {
							content: '""',
							display: "block",
							width: "60px",
							height: "3px",
							backgroundColor: "#748D92",
							margin: "8px auto 0",
						},
					}}
				>
					My Research Publication
				</Typography>
				<Grid container justifyContent="center">
					{certifications.map((cert, index) => (
						<Grid item xs={12} key={index}>
							<Card
								variant="outlined"
								component="a"
								href={cert.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									borderRadius: "10px",
									boxShadow: 3,
									textDecoration: "none", // Removes underline from the link
									cursor: "pointer",
									"&:hover": { boxShadow: 6 },
									display: "flex",
									justifyContent: "center",
								}}
							>
								<CardContent sx={{ textAlign: "center", padding: 4 }}>
									<FontAwesomeIcon
										icon={cert.icon}
										size="3x"
										style={{ color: "#124E66" }}
									/>
									<Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
										{cert.title}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										{cert.date}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default CertificationsComponent;