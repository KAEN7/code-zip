import React, { useState } from "react";
import Pagination from "./Pagination";

const parentPagination = () => {
	const [arr, setArr] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
	const [posts] = useState(10); // 페이지당 최대 게시글 수
	const [loading, setLoading] = useState(true);

	// pagination 변수
	const lastPost = currentPage * posts;
	const firstPost = lastPost - posts;
	const currentPosts = arr.slice(firstPost, lastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// useEffect로 API 요청
	useEffect(() => {
		// 처음 불러올때 초기화
		let temp = [];
		const username = localStorage.getItem("username");
		const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

		if (repoRegister) {
			const getRepo = async () => {
				for (let i = 0; i < repoRegister.length; i++) {
					let url = `https://api.github.com/repos/${username}/${repoRegister[i].name}/issues`;

					await axios
						.get(url, {
							headers: {
								Accept: "application/vnd.github.nightshade-preview+json",
							},
						})
						.then((res) =>
							res.data.forEach((el) => {
								el.repo = repoRegister[i].name;
								temp.push(el);
							})
						);
				}

				setLoading(!loading);
				setIssue(temp);
			};

			getRepo();
		}
	}, []);

	return (
		<>
			<Pagination
				posts={posts}
				totalPosts={issue.length}
				paginate={paginate}
				currentPage={currentPage}
			/>

			<ul>
				{loading ? (
					// 로딩 컴포넌트
					<></>
				) : currentPosts.length === 0 ? (
					<h2 style={{ marginTop: "20rem" }}>저장된 list가 없어요</h2>
				) : (
					currentPosts.map((data, idx) => <Pagination data={data} key={idx} />)
				)}
			</ul>
		</>
	);
};

export default React.memo(parentPagination);
