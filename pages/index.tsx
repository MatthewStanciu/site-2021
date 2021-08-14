import ProjectLink from '@/components/project-link'
import theme from '@/lib/theme'
import { Flex, Container, Heading, Text, Image, Grid } from 'theme-ui'

const Home = () => (
  <>
    <Grid gap={[1, 2]} columns={[null, 2]} sx={{
      textAlign: ['center', 'left'],
      px: [4, null, 5, 6, 7],
      mb: [2, 5],
      mt: 3
    }}>
      <Image
        src="../static/portrait-bloomington.jpg"
        sx={{
          overflow: 'hidden',
          minHeight: '18rem',
          maxHeight: '36rem',
          maxWidth: '100%',
          borderRadius: '6px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)',
          objectFit: 'cover'
        }}
      />
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        my: 3
      }}>
        <Heading
          as="h1"
          variant="title"
          color="coral"
          sx={{
            fontSize: [4, 5, 6, 7]
          }}
        >
          Hi, I'm Matthew.
        </Heading>
        <Text sx={{
          fontSize: [1, 2, null, 3, 4],
          mb: 3,
          textAlign: 'left'
        }}>
          I’m a 19-year-old web developer from West Lafayette, IN. I write code, organize hackathons, and eat Chipotle. 🏳️‍🌈
        </Text>
        <Text sx={{ fontSize: [1, 2, null, 3, 4], textAlign: 'left' }}>
          In high school, I did cool things like organize {' '} <ProjectLink target="_" href="https://windyhacks.com">Windy City Hacks</ProjectLink>{' '} & run a {' '} <ProjectLink target="_" href="https://hackclub.com">Hack Club</ProjectLink>{' '}at my high school. Now I'm continuing to grow at Purdue University. ✨🚀👁
        </Text>
      </Container>
    </Grid>
    <Container variant="wide" sx={{
      px: [4, 6]
    }}>
      <Heading
        as="h1"
        variant="title"
        color="smoke"
        sx={{
          fontSize: [3, 4, 5],
          textAlign: 'center',
          mb: 3
        }}
      >
        Things I'm Proud Of
      </Heading>
    </Container>
  </>
)

export default Home