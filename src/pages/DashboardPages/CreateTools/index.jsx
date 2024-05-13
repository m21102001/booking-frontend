
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';
import { MdOutlineArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

const CreateTools = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `tools`,
          {
            title: title,
            image: image,
            description: description,
            link: link
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          toast.success('تم التعديل بنجاح')
          navigate('/dash/tools')
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('لم تنجح عملية التعديل')
    }
  };
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل فى تفاصبل الكورس</h2>
        </div>
        <Link to={'/dash/tools'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">العنوان </div>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            id="title"
            required
            placeholder=" العنوان *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">اضف صوره* (Choose image (.jpg, .png, ...))<span className='text-danger'></span></div>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            id="image"
            placeholder="اضف صوره*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="label-form">تعديل الوصف *</div>
          <textarea
            rows={5}
            type="text"
            name="description"
            className="form-control mb-3"
            id="description"
            required
            placeholder="عدل فى الوصف *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="label-form">اللينك </div>
          <input
            type="text"
            name="link"
            className="form-control mb-3"
            id="link"
            required
            placeholder=" اللينك *"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              اضافة
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate('/dash/tools')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTools