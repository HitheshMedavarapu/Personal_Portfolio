import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const experienceData = [
	{
		role: "Web Developer Intern",
		company: "Sanridge Pvt Ltd",
		duration: "Jul 2021 - Dec 2021",
		achievements: [
			"Designed and developed the cab booking feature for the “Excelli Super App” using Figma for UI/UX, collaborated with stakeholders to translate user needs into front-end solutions with HTML/CSS and JavaScript, and ensured code quality through reviews and documentation management."
		]
	},
	{
		role: "Graduate Assistant",
		company: "SUNY New Paltz",
		duration: "Jan 2024 - may 2024",
		achievements: [
			"Developed and deployed a full-stack AI-powered grading website using modern frameworks (React.js, Angular, FastAPI) and AWS, reducing grading time by 80% and improving student satisfaction by 50%, while also managing project communications, tracking key metrics with Tableau/Power BI, and ensuring clear documentation."
		],
	},
	{
		type: "heading",
		title: "My Experiences"
	},
	{
		type: "experience",
		role: "front End Developer - Web and Mobile Platforms",
		company: "Denken Solutions",
		duration: "Aug 2024 - Present",
		achievements: [
			"Developed frontend components using React and React Native.",
			"Designed layouts and prototypes in Figma and Canva.",
			"Implemented server-side logic in Node.js and Express, tested APIs with Postman.",
			"Managed code with GitHub and deployed to AWS.",
			"Designed NoSQL databases using MongoDB and Firebase.",
			"Utilized Android Studio, Expo, Xcode for mobile app development.",
			"Integrated content management system (CMS) tools for efficient workflows."
		]
	}
];

const ExperienceComponent = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#212A31",
				p: { xs: 1, sm: 4 },
				color: "#fff",
				minHeight: "100vh",
				position: "relative",
			}}
		>
			<Typography
				variant="h4"
				align="center"
				sx={{
					margin: "20px 0px",
					"&::after": {
						content: '""',
						display: "block",
						width: "60px",
						height: "3px",
						backgroundColor: "#D3D9D4",
						margin: "8px auto 0",
					},
				}}
			>
				My Internships
			</Typography>

			<Box sx={{ position: "relative", width: "100%" }}>
				{/* Continuous vertical line */}
				<Box
					sx={{
						position: "absolute",
						left: { xs: "5%", sm: "10%" },
						top: 0,
						bottom: 0,
						width: "2px",
						backgroundColor: "#aaa",
						zIndex: 1,
					}}
				/>

				{experienceData.map((item, index) => {
					if (item.type === "heading") {
						// Render a section heading
						return (
							<Box
								key={index}
								sx={{
									textAlign: "center",
									margin: "40px 0",
									position: "relative",
									zIndex: 2,
								}}
							>
								<Typography
									variant="h4"
									align="center"
									sx={{
										margin: "20px 0px",
										"&::after": {
											content: '""',
											display: "block",
											width: "60px",
											height: "3px",
											backgroundColor: "#D3D9D4",
											margin: "8px auto 0",
										},
									}}
								>
									{item.title}
								</Typography>
							</Box>
						);
					} else {
						// Render an experience card with its dot
						return (
							<Box
								key={index}
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									marginBottom: 4,
									position: "relative",
									zIndex: 2,
								}}
							>
								{/* Dot on the vertical line */}
								<Box
									sx={{
										position: "absolute",
										left: { xs: "5%", sm: "10%" },
										transform: "translate(-50%, -50%)",
										width: 16,
										height: 16,
										borderRadius: "50%",
										backgroundColor: "#333",
										border: "2px solid #aaa",
									}}
								/>

								{/* Experience Card */}
								<Card
									sx={{
										width: "80%",
										backgroundColor: "#124E66",
										color: "#fff",
										borderRadius: 2,
										boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
										marginLeft: { xs: "12%", sm: "12%" },
									}}
								>
									<CardContent>
										<Typography variant="h4" gutterBottom>
											{item.role} - {item.company}
										</Typography>
										<Typography variant="body2" gutterBottom>
											{item.duration}
										</Typography>
										<Typography variant="body1">
											{item.achievements.map((ach, idx) => (
												<Box key={idx}>- {ach}</Box>
											))}
										</Typography>
									</CardContent>
								</Card>
							</Box>
						);
					}
				})}
			</Box>
		</Box>
	);
};

export default ExperienceComponent;
