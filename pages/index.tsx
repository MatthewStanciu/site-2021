import ProjectLink from '@/components/project-link'
import theme from '@/lib/theme'
import { Flex, Container, Heading, Text, Image, Grid } from 'theme-ui'

const Home = () => (
  <>
    <Grid gap={[1, 2]} columns={[null, 2]} sx={{
      textAlign: ['center', 'left'],
      px: ['32px', '48px', '108px'],
      mb: 6,
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
              fontSize: [1, 2, 3],
              mb: 3,
              textAlign: 'left'
            }}>
              I’m a 19-year-old web developer from West Lafayette, IN. I write code, organize hackathons, and eat Chipotle. 🏳️‍🌈
            </Text>
            <Text sx={{ fontSize: [1, 2, 3], textAlign: 'left' }}>
              In high school, I did cool things like organize {' '} <ProjectLink target="_" href="https://windyhacks.com">Windy City Hacks</ProjectLink>{' '} & run a {' '} <ProjectLink target="_" href="https://hackclub.com">Hack Club</ProjectLink>{' '}at my high school. Now I'm continuing to grow at Purdue University. ✨🚀👁
            </Text>
          </Container>
    </Grid>
    <Flex>
      <h1>hey</h1>
    </Flex>
  </>
)

export default Home