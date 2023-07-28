// UserSearch.tsx
import React, { useState } from "react";
import { searchUsers } from "./githubApi";
import {
	Button,
	Card,
	Accordion, Container,
	Row,
	Col,
	Form,
} from "react-bootstrap";

interface User {
	login: string;
	id: number;
}

const UserSearch: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [users, setUsers] = useState<User[]>([]);
	const accessToken = "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"; // Replace with your actual GitHub access token

	const handleSearch = async () => {
		try {
			const users = await searchUsers(searchQuery, accessToken);
			setUsers(users);
		} catch (error: any) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<Container className="p-5">
				<Row>
					<Col xs={6} md={3}></Col>
					<Col xs={12} md={5}>
						<Card>
							<h3>Github User Search</h3>
							<Form.Control
								type="text"
								placeholder="Search User"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>

							<Button variant="primary" className="mt-3" onClick={handleSearch}>
								Search
							</Button>

							<i className="text-secondary mb-2">
								{" "}
								Showing user for "{searchQuery}"
							</i>
							<Accordion defaultActiveKey="0">
								{users.map((user) => (
									<Accordion.Item eventKey={user.id.toString()}>
										<Accordion.Header>{user.login}</Accordion.Header>
										<Accordion.Body>
											<b>Repository Title #{user.id}</b>
											<p>Repository Description</p>
										</Accordion.Body>
									</Accordion.Item>
								))}
							</Accordion>
						</Card>
					</Col>
					<Col xs={6} md={3}></Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserSearch;
