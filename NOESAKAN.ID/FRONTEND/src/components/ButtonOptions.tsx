import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, IconButton, Button, Stack, Flex } from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';

export default function ButtonOptions() {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex
      justifyContent="center"
      mt={4}
    >
      <Popover
        placement="bottom"
        isLazy
      >
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
            bg={'none'}
            fontSize={'25px'}
            _hover={{ bg: 'none' }}
          />
        </PopoverTrigger>
        <PopoverContent
          w="fit-content"
          _focus={{ boxShadow: 'none' }}
        >
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<AiOutlineEdit />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                Edit
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<AiOutlineDelete />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Delete
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
