type NavLinkType = {
  name: string;
  href: string;
  current: boolean;
  hiddenInMd?: boolean;
};
function NavLink({
  navItem,
  openModal,
}: {
  navItem: NavLinkType[];
  openModal: Function;
}) {
  return (
    <>
      {navItem.map((navItem) => (
        <li
          onClick={() => openModal(false)}
          className={`${
            navItem.hiddenInMd ? "md:hidden" : ""
          } flex mx-3 text-sm px-1 py-2 rounded-xl nav-item`}
        >
          <a
            href={navItem.href}
            className="font-body color-body"
            aria-current="page"
          >
            {navItem.name}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavLink;
