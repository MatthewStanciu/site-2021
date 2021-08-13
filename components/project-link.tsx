import { Link } from "@theme-ui/components"

const ProjectLink = ({ children, ...props }: any) => (
  <Link sx={{
    textDecoration: 'none',
    transition: 'ease-out color 0.125s',
    color: 'lightseagreen',
    '&:hover, &:focus': {
      color: 'turquoise',
      transition: 'color 0.125s ease-in'
    }
  }} {...props}>{children}</Link>
)

export default ProjectLink