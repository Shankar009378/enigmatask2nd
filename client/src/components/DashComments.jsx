import { Modal, Table, Button, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');
  const [commentIdToEdit, setCommentIdToEdit] = useState('');
  const [showEditCmt, setShowEditCmt] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [ed, setEd] = useState(null);
  useEffect(() => {
    const fetchComments = async () => {
      console.log(currentUser._id);
      try {
        const res = await fetch(`/api/comment/getcomments?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id, showEditCmt]);
  //
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //
  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/comment/editComment/${ed._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: inputValue,
        }),
      });
      if (res.ok) {
        setShowEditCmt(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {showEditCmt ?
        //   <div style={{position:"absolute",top:"50%",left:"50%",display:"flex",flexDirection:"column",alignItems:"center",transform:"translate(-50%, -50%)",textAlign:"center"}}>
        //   <textarea
        //   type="text"
        //   value={inputValue}
        //   onChange={handleInputChange}
        //   placeholder="Enter some text"
        //   className="m-4 w-full sm:w-500px md:w-300px lg:w-250px"
        // />
        // <Button onClick={()=>{handleSave()}}>Edit</Button>
        //   </div>:""
        <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
          <Textarea
            className='max-w-[50%] mb-4 px-3 py-2 border border-gray-300 rounded-md'
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className='flex justify-end gap-2 text-xs mt-10'>
            <Button
              type='button'
              size='sm'
              className='bg-gradient-to-r from-green-500 to-black text-white border-green-500 hover:bg-black hover:text-white hover:border-black'
              onClick={()=>{handleSave()}}
            >
              Save
            </Button>
            <Button
              type='button'
              size='sm'
              className='bg-gradient-to-r from-green-500 to-black text-white border-green-500 hover:bg-black hover:text-white hover:border-black'
              outline
              onClick={() => setShowEditCmt(false)}
            >
              Cancel
            </Button>
          </div>
        </div> : ""

      }
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Number of likes</Table.HeadCell>
              <Table.HeadCell>QuestionId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              (currentUser._id === comment.userId
                ?
                <Table.Body className='divide-y' key={comment._id}>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell>
                      {new Date(comment.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>{comment.content}</Table.Cell>
                    <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                    <Table.Cell>{comment.postId}</Table.Cell>
                    <Table.Cell>{comment.userId}</Table.Cell>
                    <Table.Cell>
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setCommentIdToDelete(comment._id);
                        }}
                        className='font-medium text-red-500 hover:underline cursor-pointer'
                      >
                        Delete
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span
                        onClick={() => {
                          setShowEditCmt(!showEditCmt);
                          setInputValue(comment.content);
                          setEd(comment);
                        }}
                        className='font-medium text-green-500 hover:underline cursor-pointer'

                      >
                        Edit
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body> : ""
              )
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no comments yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteComment}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
