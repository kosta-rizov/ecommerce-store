import { FC } from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-category";
import NavbarActions from "./navbar-actions";

interface NavbarProps {}

const NavBar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
