"use client";

import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<header>
			{/* Loop copied */}
			{/* <div className="cursor-default header-top overflow-hidden whitespace-nowrap text-white flex items-center">
				<ul className="flex animate-scroll gap-10">
					{[...Array(10)].map((_, i) => (
						<li key={i} className="shrink-0">
							<p className="ul-header-top-slider-item inline-flex items-center gap-2 text-[10px] uppercase tracking-wide py-2.5">
								<i className="flaticon-sparkle"></i>{" "}
								limited time offer
							</p>
						</li>
					))}

					{[...Array(10)].map((_, i) => (
						<li key={`dup-${i}`} className="shrink-0">
							<p className="ul-header-top-slider-item inline-flex items-center gap-2 text-[10px] uppercase tracking-wide">
								<i className="flaticon-sparkle"></i>{" "}
								limited time offer
							</p>
						</li>
					))}
				</ul>
			</div> */}

			<div className="header">
				{/* <img src="/assets/img/logo.svg" alt="logo" /> */}
				<div className="heading-container">
					<h1 className="header-heading">
						<span>GLA</span>MICS
					</h1>
				</div>

				<nav className="header-icons">
					<Link href="/">
						<Search className="header-icon" />
					</Link>

					<Link href="/login">
						<User className="header-icon" />
					</Link>

					<Link href="/cart">
						<div className="flex relative">
							<ShoppingCart className="header-icon" />
							<span className="text-[8px] font-semibold absolute -top-2 -right-1.5 bg-red-500 text-white rounded-full size-3 text-center items-center">
								0
							</span>
						</div>
					</Link>
					<Link href="/">
						<Menu
							className="icon menu-icon header-icon"
							onClick={() => setIsSidebarOpen(true)}
						/>
					</Link>
				</nav>
			</div>

			{/* Overlay */}
			<div
				className={`overlay ${isSidebarOpen ? "active" : ""}`}
				onClick={() => setIsSidebarOpen(false)}
			></div>

			{/* Sidebar */}
			<div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
				<div className="sidebar-header">
					<div></div>
					<X
						className="close-icon"
						onClick={() => setIsSidebarOpen(false)}
					/>
				</div>

				<nav className="sidebar-links">
					<Link href="/home" className="sidebar-link">
						Home
					</Link>
					<Link href="/shop" className="sidebar-link">
						Shop
					</Link>
					<Link href="/shop" className="sidebar-link">
						Women
					</Link>
					<Link href="/shop" className="sidebar-link">
						Men
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
