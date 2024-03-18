import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Reaction from "../components/Reaction";
import Comment from "../components/Comment";
import { useState } from "react";

const PostPage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex gap={3} w={"full"} alignItems={"center"}>
          <Avatar src="/default-avatar.png" name="Username" size={"md"} />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Username
            </Text>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Placeholder post</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/logo192.png" w="full" />
      </Box>
      <Flex gap={3} my={3}>
        <Reaction liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          322 Replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} Likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👀</Text>
          <Text color={"gray.light"}>Download to like and reply</Text>
        </Flex>
        <Button>Download</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="hello world"
        createdAt="2d"
        likes={100}
        username="Jim Jones"
        userAvatar="/default-avatar.png"
      />
    </>
  );
};

export default PostPage;
