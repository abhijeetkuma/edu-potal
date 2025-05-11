import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
//import { Slide, toast, ToastContainer } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  List,
  Table,
  Heading,
  BlockQuote,
  Alignment,
} from "ckeditor5";

//import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
//import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
//import "react-toastify/ReactToastify.css";
import { getImageURL, getGalleryURL } from "../utils/utils-image";

// import CKTextEditor from "../Components/ckTextEditor/editor";
const apiurl = "/api";
function College() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  //const [errorMsg, setErrorMsg] = useState([]);
  const [highLights, setHighLights] = useState([
    { highParameter: "", highDetails: "" },
  ]);

  const [qusAns, setQusAns] = useState([
    { question: "", answer: "" },
  ]);

  const [subcoursesoptions, setSubcoursesoptions] = useState([
    {
      subcourseId: "",
      course_duration: "",
      course_fee: "",
      feetype_id: "",
      course_seats: "",
      subcoursedescription: "",
      subcourseselectioncriteria: "",
      subcourseselectiioneligibility: "",
      subcoursestype: "",
    },
  ]);

  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const [gallery1, setGallery1] = useState("");
  const [gallery2, setGallery2] = useState("");
  const [gallery3, setGallery3] = useState("");
  const [gallery4, setGallery4] = useState("");
  const [gallery5, setGallery5] = useState("");
  const [brouchure, setBrouchure] = useState("");
  const [catgoryarr, setCatgoryarr] = useState([]);
  const [coursearr, setCoursearr] = useState([]);
  const [subcoursestypearr, setSubcoursestypearr] = useState([]);
  const [subcoursearr, setSubcoursearr] = useState([]);
  const [approvedbyarr, setApprovedbyarr] = useState([]);
  const [tradingarr, setTradingarr] = useState([]);
  const [examarr, setExamarr] = useState([]);
  const [feetypearr, setFeetypearr] = useState([]);
  const [facilityarr, setFacilityarr] = useState([]);
  const [collegetypearr, setCollegetypearr] = useState([]);
  const [collegetypevalue, setCollegetypevalue] = useState([]);
  const [tradingvalue, setTradingvalue] = useState([]);
  const [approvedbyvalue, setApprovedbyvalue] = useState([]);
  const [facilityvalue, setFacilityvalue] = useState([]);
  const [categoryvalue, setCategoryvalue] = useState([]);
  const [subcourcevalue, setSubcourcevalue] = useState([]);
  const [coursevalue, setCoursevalue] = useState([]);
  const [examvalue, setExamvalue] = useState([]);
  const [subcoursesarr, setSubcoursesarr] = useState([]);
  const [dispsubcourse, setDispsubcourse] = useState([]);
  const [countryarr, setCountryarr] = useState([]);
  const [statearr, setStatearr] = useState([]);
  const [cityarr, setCityarr] = useState([]);
  const [collegedescvalue, setCollegedescvalue] = useState("");
  const [admissiondetailsvalue, setAdmissiondetailsvalue] = useState("");
  const [scholarshipoffervalue, setScholarshipoffervalue] = useState("");
  const [facultyprofilevalue, setFacultyprofilevalue] = useState();
  const [faqvalue, setFaqvalue] = useState();
  const [placementoverviewvalue, setPlacementoverviewvalue] = useState();
  const [subcoursecheckbox, setSubcoursecheckbox] = useState();
  const [isBasic, setIsBasic] = useState(true);
  const [isContact, setIsContact] = useState(false);
  const [isPlacement, setIsPlacement] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [isAdmission, setIsAdmission] = useState(false);
  const [isHighlights, setIsHighLights] = useState(false);
  const [isFaq, setIsFaq] = useState(false);
  const [isCourse, setIsCourse] = useState(false);

  const [insertActivetabs, setInsertActivetabs] = useState(false);
  const [basicActive, setBasicActive] = useState("active");
  const [contactActive, setContactActive] = useState("");
  const [highlightsActive, setHighlightsActive] = useState("");
  const [galleryActive, setGalleryActive] = useState("");
  const [admissionActive, setAdmissionActive] = useState("");
  const [placementActive, setPlacementActive] = useState("");
  const [faqActive, setFaqActive] = useState("");
  const [courseActive, setCourseActive] = useState("");
  const [ratingActive, setRatingActive] = useState("");
  const [successmsg, setSuccessmsg] = useState("");
  const [appopenvalue, setAppopenvalue] = useState("");

  const [errors, setErrors] = useState({});

  //const [editdata, setEditdata] = useState([]);
  const [editdata, setEditdata] = useState({
    college_name: "",
    college_url: "",
    tag_line: "",
    usp_remark: "",
    found_year: "",
    intake: "",
    college_descripton: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    coupon_code: "",
    nirg_ranking: "",
    application_open: "",
    address: "",
    address2: "",
    landmark: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    contactno: "",
    faxno: "",
    email: "",
    website: "",
    ctype: [],
    trading: [],
    adminssiondetails: "",
    facultyprofile: "",
    faq: "",
    facilityvalue: [],
    exams: [],
    gallery1: "",
    gallery2: "",
    gallery3: "",
    gallery4: "",
    gallery5: "",
    brouchure: "",
    youtube: "",
    highlights: [{ highParameter: "", highDetails: "" }],
    qusAns: [{ question: "", answer: "" }],

    sub_course_details: [
      {
        subcourseId: "",
        course_duration: "",
        course_fee: "",
        feetype_id: "",
        course_seats: "",
        subcoursedescription: "",
        subcourseselectioncriteria: "",
        subcourseselectiioneligibility: "",
        subcoursestype: "",
      },
    ],
  });
  const { cid } = useParams();
  //console.log("College id:", cid);

  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      .get(apiurl + "/getapprovedbyarr")
      .then((response) => {
        setApprovedbyarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getcategoryarr")
      .then((response) => {
        setCatgoryarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getcoursearr")
      .then((response) => {
        setCoursearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getsubcoursestypearr")
      .then((response) => {
        setSubcoursestypearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getsubcoursearr")
      .then((response) => {
        setSubcoursearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/gettradingarr")
      .then((response) => {
        setTradingarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getexamarr")
      .then((response) => {
        setExamarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getfeetypearr")
      .then((response) => {
        setFeetypearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getfacilityarr")
      .then((response) => {
        setFacilityarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getcollegetypearr")
      .then((response) => {
        setCollegetypearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getcountryarr")
      .then((response) => {
        setCountryarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(apiurl + "/getstatearr")
      .then((response) => {
        setStatearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    /*  axios
      .get(apiurl+"/getcityarr")
      .then((response) => {
        setCityarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); */

    if (cid > 0) {
      axios
        .get(apiurl + "/editcolleges/" + cid)
        .then((response) => {
          setEditdata(response.data[0]);
          if (response.data[0].highlights) {
            setHighLights(
              response.data[0]?.highlights
                ? response.data[0]?.highlights
                : { highParameter: "", highDetails: "" }
            );
          } else {
            setHighLights([{ highParameter: "", highDetails: "" }]);
          }
          /* */
          if (response.data[0].sub_course_details) {
            setSubcoursesoptions(response.data[0]?.sub_course_details);
          } else {
            setSubcoursesoptions([
              {
                subcourseId: "",
                course_duration: "",
                course_fee: "",
                feetype_id: "",
                course_seats: "",
                subcoursedescription: "",
                subcourseselectioncriteria: "",
                subcourseselectiioneligibility: "",
                subcoursestype: "",
              },
            ]);
          }

          //console.log("sd-->", response.data[0].facilities);
          //setFacilityvalue(JSON.stringify(response.data[0].facilities));
          let editfacilityArr = response.data[0].facilities;
          let editcollegetypeArr = response.data[0].ctype;
          let edittradingArr = response.data[0].trading;
          let editapprovedArr = response.data[0].approvedby;
          let editcategoriesArr = response.data[0].categories;
          let editexamsArr = response.data[0].exams;
          let editcourseArr = response.data[0].courses;
          setFacilityvalue(
            editfacilityArr.length > 0 ? editfacilityArr.split(",") : []
          );
          setCollegetypevalue(
            editcollegetypeArr.length > 0 ? editcollegetypeArr.split(",") : []
          );
          setTradingvalue(
            edittradingArr.length > 0 ? edittradingArr.split(",") : []
          );
          setApprovedbyvalue(
            editapprovedArr.length > 0 ? editapprovedArr.split(",") : []
          );
          setCategoryvalue(
            editcategoriesArr.length > 0 ? editcategoriesArr.split(",") : []
          );
          setExamvalue(editexamsArr.length > 0 ? editexamsArr.split(",") : []);
          setCoursevalue(
            editcourseArr.length > 0 ? editcourseArr.split(",") : []
          );
        })
        .catch((error) => {
          console.error(error);
        });
      //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
    }
  }, []);

  const handleChangeFormdata = (e) => {
    const { name, value } = e.target;
    setEditdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubcoursesClick = (e) => {
    setSubcoursesoptions([
      ...subcoursesoptions,
      {
        subcourseId: "",
        course_duration: "",
        course_fee: "",
        feetype_id: "",
        course_seats: "",
        subcoursedescription: "",
        subcourseselectioncriteria: "",
        subcourseselectiioneligibility: "",
        subcoursestype: "",
      },
    ]);
  };
  const handlesubcourseChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeData = [...subcoursesoptions];
    onChangeData[i][name] = value;
    setSubcoursesoptions(onChangeData);
  };
  const handleSubcoursesDelete = (i) => {
    const deleteData = [...subcoursesoptions];
    deleteData.splice(i, 1);
    setSubcoursesoptions(deleteData);
  };

  const handleClick = (e) => {
    setHighLights([...highLights, { highParameter: "", highDetails: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeData = [...highLights];
    onChangeData[i][name] = value;
    setHighLights(onChangeData);
  };

  const handleDelete = (i) => {
    const deleteData = [...highLights];
    deleteData.splice(i, 1);
    setHighLights(deleteData);
  };


  const handleFaQClick = (e) => {
    setQusAns([...qusAns, { question: "", answer: "" }]);
  };

  const handleFaQChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeData = [...qusAns];
    onChangeData[i][name] = value;
    setQusAns(onChangeData);
  };

  const handleFaQDelete = (i) => {
    const deleteData = [...qusAns];
    deleteData.splice(i, 1);
    setQusAns(deleteData);
  };

  const createUrl = (e) => {
    var collegename = e.target.value;
    var collegeurl = collegename
      .replace(/[_\s]/g, "-")
      .replace(/[^a-z0-9-\s]/gi, "");
    editdata.college_url = collegeurl.toLowerCase();
  };

  const basicifovalidateForm = (data) => {
    const errors = {};
    console.log(" college_name -->", data.college_name);
    if (!data.college_name.trim()) {
      errors.college_name = "College name is required.";
    }
    if (!data.college_url.trim()) {
      errors.college_url = "College url is required.";
    }
    if (!data.tag_line.trim()) {
      errors.tag_line = "Tag line is required.";
    }
    if (!data.usp_remark.trim()) {
      errors.usp_remark = "USP remark is required.";
    }
    if (!data.found_year.trim()) {
      errors.found_year = "Foundation Year is required.";
    }
    if (!data.college_descripton.trim()) {
      errors.college_descripton = "Description is required.";
    }
    if (!data.meta_title.trim()) {
      errors.meta_title = "Meta title is required.";
    }
    if (!data.meta_description.trim()) {
      errors.meta_description = "Meta description is required.";
    }
    if (!data.meta_keyword.trim()) {
      errors.meta_keyword = "Meta keyword is required.";
    }
    return errors;
  };
  const submitbasicinformation = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("cid", cid);
    formData.append("logo", logo);
    formData.append("banner", banner);
    formData.append("college_name", event.target.college_name.value);
    formData.append("college_url", event.target.college_url.value);
    formData.append("tag_line", event.target.tag_line.value);
    formData.append("usp_remark", event.target.usp_remark.value);
    formData.append("found_year", event.target.found_year.value);
    formData.append("intake", event.target.intake.value);
    formData.append("hostel_available", event.target.hostel_available.value);
    formData.append("college_descripton", collegedescvalue);
    formData.append("facultyprofile", facultyprofilevalue);
    formData.append("ctype", collegetypevalue.join(","));
    formData.append("trading", tradingvalue.join(","));
    formData.append("approvedby", approvedbyvalue.join(","));
    formData.append("facilities", facilityvalue.join(","));
    formData.append("categories", categoryvalue.join(","));
    formData.append("exams", examvalue.join(","));
    formData.append("meta_title", event.target.meta_title.value);
    formData.append("meta_keyword", event.target.meta_keyword.value);
    formData.append("coupon_code", event.target.coupon_code.value);
    formData.append(
      "nirg_ranking",
      event.target.nirg_ranking.value ? event.target.nirg_ranking.value : 0
    );
    formData.append("application_open", appopenvalue);
    formData.append("meta_description", event.target.meta_description.value);
    formData.append("old_logo", event.target.old_logo.value);
    formData.append("old_banner", event.target.old_banner.value);
    formData.append("added_by", localStorage.login_id);
    //console.log("formData----->", Object.fromEntries(formData.entries()));
    console.log("collegedescvalue-->", collegedescvalue);
    const newErrors = basicifovalidateForm(
      Object.fromEntries(formData.entries())
    );
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // console.log("newErrors-->", newErrors);
      /*
      toast.error("Basic info. sucessfully updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        //transition: Bounce,
      });*/
    }
    if (Object.keys(newErrors).length === 0) {
      if (cid > 0) {
        //update form data
        console.log("update query ");
        await axios({
          method: "post",
          url: apiurl + "/updatebasicinformation",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            //console.log(response);
            // console.log(response.statusText);
            if (response.statusText === "OK") {
              toast.success("Basic info. sucessfully updated", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                //transition: Bounce,
              });
              //return;
              //setSuccessmsg("Successfully Updated.");
              /*  setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        //end update form data
      } else {
        //console.log("insert query ");
        //insert basicinformation data
        await axios({
          method: "post",
          url: apiurl + "/insertbasicinformation",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            if (response.data["cid"] > 0 && response.statusText === "OK") {
              //setSuccessmsg("Successfully Updated.");
              toast.success("Basic info. sucessfully inserted", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                //transition: Bounce,
              });
              window.location.href =
                "/admin/collegelisting/college/" + response.data["cid"];
              //cid = response.data["cid"];
              //setInsertActivetabs(true);
            }

            /* console.log(response.statusText);
          if (response.statusText === "OK") {
            setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000);
          } */
          })
          .catch(function (error) {
            console.log(error);
          });
        //end basicinformation form data
      }
    }
  };

  const submitGallery = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cid", cid);
    formData.append("gallery1", gallery1);
    formData.append("gallery2", gallery2);
    formData.append("gallery3", gallery3);
    formData.append("gallery4", gallery4);
    formData.append("gallery5", gallery5);
    formData.append("brouchure", brouchure);
    formData.append("youtube", event.target.youtube.value);
    formData.append("old_gallery1", event.target.old_gallery1.value);
    formData.append("old_gallery2", event.target.old_gallery2.value);
    formData.append("old_gallery3", event.target.old_gallery3.value);
    formData.append("old_gallery4", event.target.old_gallery4.value);
    formData.append("old_gallery5", event.target.old_gallery5.value);
    formData.append("old_brouchure", event.target.old_brouchure.value);
    if (cid > 0) {
      //update form data
      await axios({
        method: "post",
        url: apiurl + "/updategallery",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Gallery sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };

  const submitcontactus = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cid", cid);
    formData.append("address", event.target.address.value);
    formData.append("address2", event.target.address2.value);
    formData.append("landmark", event.target.landmark.value);
    formData.append("pincode", event.target.pincode.value);
    formData.append("state", event.target.state.value);
    formData.append("city", event.target.city.value);
    formData.append("contactno", event.target.contactno.value);
    formData.append("faxno", event.target.faxno.value);
    formData.append("email", event.target.email.value);
    formData.append("website", event.target.website.value);
    console.log("event value", event.target.address.value);
    const payload = {
      cid: cid,
      address: event.target.address.value,
      address2: event.target.address2.value,
      landmark: event.target.landmark.value,
      pincode: event.target.pincode.value,
      country: event.target.country.value,
      state: event.target.state.value,
      city: event.target.city.value,
      contactno: event.target.contactno.value,
      faxno: event.target.faxno.value,
      email: event.target.email.value,
      website: event.target.website.value,
    };

    if (cid > 0) {
      //update form data
      /* axios({
        method: "post",
        url: apiurl+"/updatecontactus",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }) */
      /*  axios({
        method: "post",
        url: apiurl+"/updatecontactus",
        data: formData,
      }) */
      axios({
        method: "POST",
        url: apiurl + "/updatecontactus",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Contact details sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submitrating = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cid", cid);
    formData.append("ratingacademic", event.target.ratingacademic.value);
    formData.append(
      "rattingaccommodation",
      event.target.rattingaccommodation.value
    );
    formData.append("rattingfaculty", event.target.rattingfaculty.value);
    formData.append(
      "rattinginfrastructure",
      event.target.rattinginfrastructure.value
    );
    formData.append("rattingplacements", event.target.rattingplacements.value);
    formData.append("rattingsocial", event.target.rattingsocial.value);
    formData.append("rattingthroughout", event.target.rattingthroughout.value);
    const payload = {
      cid: cid,
      ratingacademic: event.target.ratingacademic.value,
      rattingaccommodation: event.target.rattingaccommodation.value,
      rattingfaculty: event.target.rattingfaculty.value,
      rattinginfrastructure: event.target.rattinginfrastructure.value,
      rattingplacements: event.target.rattingplacements.value,
      rattingsocial: event.target.rattingsocial.value,
      rattingthroughout: event.target.rattingthroughout.value,
    };

    if (cid > 0) {
      axios({
        method: "POST",
        url: apiurl + "/updaterating",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Rating sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submithightlight = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const payload = {
      cid: cid,
      display_type: event.target.display_type.value,
      highlights: JSON.stringify(highLights),
    };

    if (cid > 0) {
      //update form data
      axios({
        method: "POST",
        url: apiurl + "/updatehighlight",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Highlights sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submitcouses = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const payload = {
      cid: cid,
      courses: coursevalue.join(","),
      sub_course_details: JSON.stringify(subcoursesoptions),
    };

    if (cid > 0) {
      //update form data
      axios({
        method: "POST",
        url: apiurl + "/updatecourses",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Course sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submitadmission = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const payload = {
      cid: cid,
      adminssiondetails: admissiondetailsvalue,
      scholarshipoffer: scholarshipoffervalue,
    };

    if (cid > 0) {
      //update form data
      console.log("payload-->", payload);
      axios({
        method: "POST",
        url: apiurl + "/updateadmission",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Admission details sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submitplacement = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const payload = {
      cid: cid,
      placement_overview: placementoverviewvalue,
      totalplacementratio: event.target.totalplacementratio.value,
      averageplacementrecord: event.target.averageplacementrecord.value,
      higestplacementrecord: event.target.higestplacementrecord.value,
      lowestplacementrecord: event.target.lowestplacementrecord.value,
      toprecruiters: event.target.toprecruiters.value,
      toprecuitingsectors: event.target.toprecuitingsectors.value,
      topprofile: event.target.topprofile.value,
    };

    if (cid > 0) {
      //update form data
      axios({
        method: "POST",
        url: apiurl + "/updateplacement",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("Placement details sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };
  const submitfaq = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const payload = {
      cid: cid,
      faq: faqvalue,
    };

    if (cid > 0) {
      //update form data
      axios({
        method: "POST",
        url: apiurl + "/updatefaq",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          console.log(response.statusText);
          if (response.statusText === "OK") {
            toast.success("FAQ sucessfully updated", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              //transition: Bounce,
            });
            /*  setSuccessmsg("Successfully Updated.");
            setTimeout(function () {
              window.location.replace("../../collegelisting");
            }, 3000); */
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    }
  };

  const collegetypeCheck = (event) => {
    //var colltype_array = [...collegetypevalue];
    let index = collegetypevalue.indexOf(event.target.value);
    if (event.target.checked) {
      //colltype_array = [...collegetypevalue, event.target.value];
      setCollegetypevalue((collegetypevalue) => [
        ...collegetypevalue,
        event.target.value,
      ]);
    } else {
      //colltype_array.splice(collegetypevalue.indexOf(event.target.value), 1);
      collegetypevalue.splice(index, 1);
    }
    //setCollegetypevalue(colltype_array);
  };

  const tradingCheck = (event) => {
    // var trading_array = [...tradingvalue];
    let index = tradingvalue.indexOf(event.target.value);
    if (event.target.checked) {
      //trading_array = [...tradingvalue, event.target.value];
      setTradingvalue((tradingvalue) => [...tradingvalue, event.target.value]);
    } else {
      //trading_array.splice(tradingvalue.indexOf(event.target.value), 1);
      tradingvalue.splice(index, 1);
    }
    //setTradingvalue(trading_array);
  };

  const approvedbyCheck = (event) => {
    //var approved_array = [...approvedbyvalue];
    let index = approvedbyvalue.indexOf(event.target.value);
    if (event.target.checked) {
      //approved_array = [...approvedbyvalue, event.target.value];
      setApprovedbyvalue((approvedbyvalue) => [
        ...approvedbyvalue,
        event.target.value,
      ]);
    } else {
      //approved_array.splice(approvedbyvalue.indexOf(event.target.value), 1);
      approvedbyvalue.splice(index, 1);
    }
    //setApprovedbyvalue(approved_array);
  };

  const facilityCheck = (event) => {
    // var faclity_array = [...facilityvalue];
    // var faclity_array = facilityvalue;
    let index = facilityvalue.indexOf(event.target.value);
    if (event.target.checked) {
      // faclity_array = [...facilityvalue, event.target.value];

      setFacilityvalue((facilityvalue) => [
        ...facilityvalue,
        event.target.value,
      ]);
    } else {
      facilityvalue.splice(index, 1);
    }
  };
  const categoryCheck = (event) => {
    //var category_array = [...categoryvalue];
    let index = categoryvalue.indexOf(event.target.value);
    if (event.target.checked) {
      //category_array = [...categoryvalue, event.target.value];
      setCategoryvalue((categoryvalue) => [
        ...categoryvalue,
        event.target.value,
      ]);
    } else {
      //category_array.splice(categoryvalue.indexOf(event.target.value), 1);
      categoryvalue.splice(index, 1);
    }
    //setCategoryvalue(category_array);
  };
  const examCheck = (event) => {
    //var exam_array = [...examvalue];
    let index = examvalue.indexOf(event.target.value);
    if (event.target.checked) {
      // exam_array = [...examvalue, event.target.value];
      setExamvalue((examvalue) => [...examvalue, event.target.value]);
    } else {
      //exam_array.splice(examvalue.indexOf(event.target.value), 1);
      examvalue.splice(index, 1);
    }
    //setExamvalue(exam_array);
  };
  const applicationopenCheck = (event) => {
    let index = examvalue.indexOf(event.target.value);
    if (event.target.checked) {
      setAppopenvalue(event.target.value);
    } else {
      //setExamvalue();
      setAppopenvalue("");
    }
  };

  const courseCheck = (event) => {
    //var course_array = [...coursevalue];
    if (event.target.checked) {
      //course_array = [...coursevalue, event.target.value];
      setCoursevalue((coursevalue) => [...coursevalue, event.target.value]);
    } else {
      //course_array.splice(coursevalue.indexOf(event.target.value), 1);
      coursevalue.splice(index, 1);
    }
    //setCoursevalue(course_array);
    var subcorarr = [...subcoursesarr];
    axios
      .get(apiurl + "/fetchsubcourese/" + selectedcourse_id)
      .then((response) => {
        //console.log("sub course data-->", response.data);
        var subcorarrs = subcorarr.concat(response.data);
        //setSubcoursesarr(response.data);
        setSubcoursesarr(subcorarrs);
      })
      .catch((error) => {
        console.error(error);
      });
    //fetch sub courses

    //end fetch sub courses */
  };
  const changeStateid = (e) => {
    //console.log("state id-->", e.target.value);
    if (e.target.value > 0) {
      axios
        .get(apiurl + "/getstatecitylist/" + e.target.value)
        .then((response) => {
          //console.log("city list data-->", response.data);
          //var subcorarrs = subcorarr.concat(response.data);
          setCityarr(response.data);
          //setSubcoursesarr(subcorarrs);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  console.log("facilityvalue-->", facilityvalue);
  const renderPageHeader = () => {
    return (
      <>
        <div className="flex bg-white shadow">
          <div className="pageHeader p-3">
            <h1 className="text-2xl font-semibold">
              {cid > 0 ? "Update" : "New"} College Details
            </h1>
            <div className="action">
              <span>
                <Link
                  to={"../collegelisting"}
                  alt="Back To College Listing"
                  title="Back To College Listing"
                >
                  <svg
                    className="h-6 w-6 text-stone-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderSteps = () => {
    return (
      <>
        <div className="flex-grow gap-10 step-tabs">
          <Link to="#" className={basicActive} onClick={showBasic}>
            <span>Basic Info</span>
          </Link>
          <Link to="#" className={contactActive} onClick={showContacts}>
            <span>Contacts</span>
          </Link>
          <Link to="#" className={highlightsActive} onClick={showHighlights}>
            <span>Highlights</span>
          </Link>
          <Link to="#" className={galleryActive} onClick={showGallery}>
            <span>Gallery / Brouchure</span>
          </Link>
          <Link to="#" className={admissionActive} onClick={showAdmissions}>
            <span>Admissions / Scholarship</span>
          </Link>
          <Link to="#" className={ratingActive} onClick={showRating}>
            <span>Rating</span>
          </Link>
          <Link to="#" className={placementActive} onClick={showPlacements}>
            <span>Placements</span>
          </Link>
          <Link to="#" className={faqActive} onClick={showFAQ}>
            <span>FAQ</span>
          </Link>
          <Link to="#" className={courseActive} onClick={showCourse}>
            <span>Courses</span>
          </Link>
        </div>
      </>
    );
  };

  const renderBasicInfo = () => {
    return (
      <>
        <div className="sm:col-span-4 basic-info step-1 formcontener">
          {successmsg && (
            <div className="text-green font-normal text-lg"> {successmsg} </div>
          )}
          <form
            name="basicinformation"
            id="basicinformation"
            onSubmit={submitbasicinformation}
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="cid"
              value={editdata.cid && editdata.cid}
            />
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="college_name"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                College Name <span className="text-orange">*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md mt-1">
                  <input
                    type="text"
                    name="college_name"
                    id="college_name"
                    className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray "
                    placeholder="Please enter college name"
                    value={editdata.college_name && editdata.college_name}
                    onChangeCapture={createUrl}
                    onChange={handleChangeFormdata}
                    //required
                  />
                </div>
                {errors.college_name && (
                  <span className="error-message">{errors.college_name}</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="college_url"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                College URL <span className="text-orange">*</span>
              </label>

              <div className="flex rounded-md mt-1">
                <input
                  type="text"
                  name="college_url"
                  id="college_url"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="College Url not user space"
                  value={editdata.college_url && editdata.college_url}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.college_url && (
                <span className="error-message">{errors.college_url}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="tag_line"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Tag Line <span className="text-orange">*</span>
              </label>

              <div className="flex rounded-md mt-1">
                <input
                  type="text"
                  name="tag_line"
                  id="tag_line"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder=""
                  value={editdata.tag_line && editdata.tag_line}
                  onChange={handleChangeFormdata}
                  // required
                />
              </div>
              {errors.tag_line && (
                <span className="error-message">{errors.tag_line}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="usp_remark"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                USP Remark <span className="text-orange">*</span>
              </label>

              <div className="flex rounded-md mt-1">
                <input
                  type="text"
                  name="usp_remark"
                  id="usp_remark"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder=""
                  value={editdata.usp_remark && editdata.usp_remark}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.usp_remark && (
                <span className="error-message">{errors.usp_remark}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="found_year"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Foundation Year <span className="text-orange">*</span>
              </label>
              <div className="flex rounded-md mt-1">
                <input
                  id="found_year"
                  name="found_year"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.found_year && editdata.found_year}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.found_year && (
                <span className="error-message">{errors.found_year}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="intake"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Intake
              </label>
              <div className="flex rounded-md mt-1">
                <input
                  id="intake"
                  name="intake"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.intake && editdata.intake}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="hostel_available"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Hostel Available
              </label>
              <div className="flex rounded-md mt-1">
                <input
                  id="hostel_available"
                  name="hostel_available"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.hostel_available && editdata.hostel_available}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Description <span className="text-orange">*</span>
              </label>
              <div className=" rounded-md  mt-1">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={
                    editdata.college_descripton
                      ? editdata.college_descripton
                      : ""
                  }
                  name="college_descripton"
                  id="college_descripton"
                  /*  onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor 1 is ready to use!", editor);
                    }} */
                  onChange={(event, editor) => {
                    const college_descripton_data = editor.getData();
                    setCollegedescvalue(college_descripton_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                  /*  onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }} */
                />

                {/* <textarea
                    id="college_descripton"
                    name="college_descripton"
                    className="block w-full "
                    rows={10}
                    value={
                      editdata.college_descripton && editdata.college_descripton
                    }
                    onChange={handleChangeFormdata}
                  /> */}
              </div>
              {errors.college_descripton && (
                <span className="error-message">
                  {errors.college_descripton}
                </span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                College Type
              </label>
              <div className="flex flex-wrap">
                {collegetypearr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="collegetype"
                      value={item.col_type}
                      onClick={collegetypeCheck}
                      onChange={handleChangeFormdata}
                      defaultChecked={
                        editdata.ctype?.length
                          ? editdata.ctype.includes(
                              JSON.stringify(item.col_type)
                            )
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.college_type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Trading
              </label>
              <div className="flex flex-wrap">
                {tradingarr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="trading"
                      value={item.tid}
                      onClick={tradingCheck}
                      onChange={handleChangeFormdata}
                      defaultChecked={
                        editdata.trading?.length
                          ? editdata.trading.includes(JSON.stringify(item.tid))
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.trading_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Approved By
              </label>
              <div className="flex flex-wrap ">
                {approvedbyarr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="approvedby"
                      onClick={approvedbyCheck}
                      onChange={handleChangeFormdata}
                      value={item.approv_id}
                      //onChange={(e) => handleCheckBox(e, i)}
                      defaultChecked={
                        editdata.approvedby?.length
                          ? editdata.approvedby.includes(
                              JSON.stringify(item.approv_id)
                            )
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.approved_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Facility Available
              </label>
              <div className="flex flex-wrap ">
                {facilityarr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="facilities"
                      onClick={facilityCheck}
                      onChange={handleChangeFormdata}
                      value={item.facility_id}
                      defaultChecked={
                        editdata.facilities?.length
                          ? editdata.facilities.includes(
                              JSON.stringify(item.facility_id)
                            )
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.facility_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Categories
              </label>
              <div className="flex flex-wrap ">
                {catgoryarr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="categories"
                      value={item.cat_id}
                      onClick={categoryCheck}
                      onChange={handleChangeFormdata}
                      //onChange={(e) => handleCheckBox(e, i)}
                      defaultChecked={
                        editdata.categories?.length
                          ? editdata.categories.includes(
                              JSON.stringify(item.cat_id)
                            )
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.category_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Exam
              </label>
              <div className="flex flex-wrap ">
                {examarr.map((item, i) => (
                  <div key={i} className="mt-2 text-sm">
                    <input
                      type="checkbox"
                      name="exams"
                      value={item.exam_id}
                      onClick={examCheck}
                      onChange={handleChangeFormdata}
                      defaultChecked={
                        editdata.exams?.length
                          ? editdata.exams.includes(
                              JSON.stringify(item.exam_id)
                            )
                          : false
                      }
                      className="py-2  text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.exam_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Faculty Profile
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={editdata.facultyprofile ? editdata.facultyprofile : ""}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //console.log("Editor 1 is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const facultyprofile_data = editor.getData();
                    setFacultyprofilevalue(facultyprofile_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="meta_title"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Meta Title <span className="text-orange">*</span>
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <input
                  id="meta_title"
                  name="meta_title"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.meta_title && editdata.meta_title}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.meta_title && (
                <span className="error-message">{errors.meta_title}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="meta_description"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Meta Description <span className="text-orange">*</span>
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <textarea
                  id="meta_description"
                  name="meta_description"
                  type="text"
                  rows={5}
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.meta_description && editdata.meta_description}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.meta_description && (
                <span className="error-message">{errors.meta_description}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="meta_keyword"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Meta Keyword <span className="text-orange">*</span>
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <input
                  id="meta_keyword"
                  name="meta_keyword"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.meta_keyword && editdata.meta_keyword}
                  onChange={handleChangeFormdata}
                  //required
                />
              </div>
              {errors.meta_keyword && (
                <span className="error-message">{errors.meta_keyword}</span>
              )}
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="coupon_code"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Coupon Code
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <input
                  id="coupon_code"
                  name="coupon_code"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.coupon_code && editdata.coupon_code}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="nirg_ranking"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                NIRF Ranking
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-1">
                <input
                  id="nirg_ranking"
                  name="nirg_ranking"
                  type="number"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={
                    editdata.nirg_ranking && editdata.nirg_ranking > 0
                      ? editdata.nirg_ranking
                      : ""
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2 pr-4">
              <label
                htmlFor="application_open"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                <input
                  type="checkbox"
                  name="application_open"
                  id="application_open"
                  value="Y"
                  onClick={applicationopenCheck}
                  onChange={handleChangeFormdata}
                  //onChange={(e) => handleCheckBox(e, i)}
                  defaultChecked={
                    editdata.application_open === "Y" ? true : false
                  }
                  className="py-2 text-sm font-semibold pr-4 mr-4"
                />
                Application Open
              </label>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Logo
              </label>
              <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-1">
                <input
                  name="logo"
                  type="file"
                  filename={logo}
                  onChange={(e) => setLogo(e.target.files[0])}
                  accept="image/*"
                  //required={cid > 0 ? false : true}
                />
                <input type="hidden" name="old_logo" value={editdata.logo} />
                {editdata.logo && <img src={getImageURL(editdata.logo)} />}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Banner
              </label>
              <div className="flex rounded-md shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-1">
                <input
                  type="file"
                  filename={banner}
                  onChange={(e) => setBanner(e.target.files[0])}
                  accept="image/*"
                  //required={cid > 0 ? false : true}
                />
                <input
                  type="hidden"
                  name="old_banner"
                  value={editdata.banner}
                />
                {editdata.banner && <img src={getImageURL(editdata.banner)} />}
                {/* {editdata.logo && (
                  <img src={"../../../colleges/banner/" + editdata.banner} />
                )} */}
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderCourse = () => {
    return (
      <>
        <div className="sm:col-span-4 highlights step-2 formcontener">
          <form name="courseForm" id="courseForm" onSubmit={submitcouses}>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="courses"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Courses
              </label>
              <div className="flex flex-wrap">
                {coursearr.map((item, i) => (
                  <div key={i} className="col-span-8">
                    <input
                      type="checkbox"
                      name="courses"
                      id="courses"
                      value={item.cour_id}
                      onClick={courseCheck}
                      onChange={handleChangeFormdata}
                      //onChange={(e) => handleCheckBox(e, i)}
                      defaultChecked={
                        editdata.courses?.length
                          ? editdata.courses.includes(
                              JSON.stringify(item.cour_id)
                            )
                          : false
                      }
                      className="py-2 text-sm font-semibold"
                    />
                    <span className="py-2 px-2 text-sm font-normal text-justify">
                      {item.course_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="courses"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Courses Braches
              </label>
            </div>

            <div className="sm:col-span-4">
              {subcoursesoptions.map((item, i) => (
                <>
                  <div className="flex mb-2" key={`key-${i}`}>
                    <div className="sm:col-span-4 px-2">
                      <select
                        name="subcourseId"
                        id="subcourseId"
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray pb-2 pt-2"
                      >
                        <option value="">Select Branch</option>
                        {subcoursearr.map((items, i) => (
                          <option
                            value={items.courb_id}
                            selected={
                              items.courb_id == item.subcourseId ? true : false
                            }
                          >
                            {items.branch_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-4 px-2">
                      <input
                        type="text"
                        value={item.course_duration}
                        name="course_duration"
                        id="course_duration"
                        placeholder="Course Duration"
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-4 px-2">
                      <input
                        type="text"
                        value={item.course_fee}
                        name="course_fee"
                        id="course_fee"
                        placeholder="Fee"
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2 px-2">
                      <select
                        id="feetype_id"
                        name="feetype_id"
                        type="text"
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      >
                        <option value="">Select Type</option>
                        {feetypearr.map((items, i) => (
                          <option
                            value={items.feetype_id}
                            selected={
                              items.feetype_id == item.feetype_id ? true : false
                            }
                          >
                            {items.fee_type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-4 px-2">
                      <input
                        id="course_seats"
                        name="course_seats"
                        type="number"
                        placeholder="Available Seats"
                        value={item.course_seats}
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-4 px-2">
                      <input
                        id="subcoursedescription"
                        name="subcoursedescription"
                        type="text"
                        placeholder="Description"
                        value={item.subcoursedescription}
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2 px-2">
                      <input
                        id="subcourseselectioncriteria"
                        name="subcourseselectioncriteria"
                        type="text"
                        placeholder="Accepted Exams"
                        value={item.subcourseselectioncriteria}
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2 px-2">
                      <input
                        id="subcourseselectiioneligibility"
                        name="subcourseselectiioneligibility"
                        type="text"
                        placeholder="Selection Eligibility"
                        value={item.subcourseselectiioneligibility}
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2 px-2">
                      <select
                        id="subcoursestype"
                        name="subcoursestype"
                        type="text"
                        onChange={(e) => handlesubcourseChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      >
                        <option value="">Select Type</option>
                        {subcoursestypearr.map((items, i) => (
                          <option
                            value={items.coursetype_id}
                            selected={
                              items.coursetype_id == item.subcoursestype
                                ? true
                                : false
                            }
                          >
                            {items.course_type_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      {i === 0 && (
                        <button
                          type="button"
                          onClick={handleSubcoursesClick}
                          className="addButton"
                        >
                          Add
                        </button>
                      )}
                      {i !== 0 && (
                        <button
                          type="button"
                          onClick={() => handleSubcoursesDelete(i)}
                          className="removeButton"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderHighlights = () => {
    return (
      <>
        <div className="sm:col-span-4 highlights step-2 formcontener">
          <form
            name="contactusform"
            id="contactusform"
            onSubmit={submithightlight}
            //encType="multipart/form-data"
          >
            <div className="sm:col-span-4 pb-2">
              <label className="block text-left font-normal leading-6 text-gray-dark pb-1">
                Display Type :
              </label>
              <div className="flex-1 space-x-5">
                <input
                  type="radio"
                  value="Points"
                  name="display_type"
                  defaultChecked={
                    editdata.display_type == "Points" ? true : false
                  }
                />
                <label className="font-thin">Bullet Points</label>
                <input
                  type="radio"
                  value="Tabuller"
                  name="display_type"
                  defaultChecked={
                    editdata.display_type == "Tabuller" ? true : false
                  }
                />
                <label className="font-thin">Tabuller</label>
              </div>
            </div>
            <div className="sm:col-span-4">
              {highLights.map((item, i) => (
                <>
                  <div className="flex mb-2" key={`key-${i}`}>
                    <div className="sm:col-span-4 px-2">
                      <input
                        id="highParameter"
                        name="highParameter"
                        type="text"
                        placeholder="Parameter"
                        value={item.highParameter}
                        onChange={(e) => handleChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2 px-2">
                      <input
                        id="highDetails"
                        name="highDetails"
                        type="text"
                        placeholder="Use colons for bullet points"
                        value={item.highDetails}
                        onChange={(e) => handleChange(e, i)}
                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      {i === 0 && (
                        <button
                          type="button"
                          onClick={handleClick}
                          className="addButton"
                        >
                          Add
                        </button>
                      )}
                      {i !== 0 && (
                        <button
                          type="button"
                          onClick={() => handleDelete(i)}
                          className="removeButton"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderAdmission = () => {
    return (
      <>
        <div className="sm:col-span-4 admission step-3 formcontener">
          <form
            name="admissionform"
            id="admissionform"
            method="post"
            onSubmit={submitadmission}
          >
            <div className="sm:col-span-4">
              <label
                htmlFor="adminssiondetails"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Admission Details
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-2">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={
                    editdata.adminssiondetails ? editdata.adminssiondetails : ""
                  }
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //console.log("Editor 1 is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const adminssiondetails_data = editor.getData();
                    setAdmissiondetailsvalue(adminssiondetails_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-2">
              <label
                htmlFor="scholarshipoffer"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Scholarship Offers
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-2">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={
                    editdata.scholarshipoffer ? editdata.scholarshipoffer : ""
                  }
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log("Editor 1 is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const scholarshipoffer_data = editor.getData();
                    setScholarshipoffervalue(scholarshipoffer_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const renderFAQ = () => {
    return (
      <>
        <div className="sm:col-span-4 admission step-3 formcontener">
          <form name="faqForm" id="faqForm" onSubmit={submitfaq}>
            <div className="sm:col-span-4">
              <label
                htmlFor="faq"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                FAQ
              </label>

              {qusAns.map((item, i) => (
                <>
                  <div className="flex mb-2" key={`key-${i}`}>
                    <div className="flex-1	">
                      <div className="px-2 mb-2">
                        <input
                          id="highParameter"
                          name="highParameter"
                          type="text"
                          placeholder="Question"
                          value={item.highParameter}
                          onChange={(e) => handleFaQChange(e, i)}
                          className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                        />
                      </div>
                      <div className="px-2">
                        <input
                          id="highDetails"
                          name="highDetails"
                          type="text"
                          placeholder="Answer"
                          value={item.highDetails}
                          onChange={(e) => handleFaQChange(e, i)}
                          className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      {i === 0 && (
                        <button
                          type="button"
                          onClick={handleFaQClick}
                          className="addButton"
                        >
                          Add FAQ
                        </button>
                      )}
                      {i !== 0 && (
                        <button
                          type="button"
                          onClick={() => handleFaQDelete(i)}
                          className="removeButton"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ))}

              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">     
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={editdata.faq ? editdata.faq : ""}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //console.log("Editor 1 is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const faq_data = editor.getData();
                    setFaqvalue(faq_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const renderRating = () => {
    return (
      <>
        <div className="sm:col-span-4 contact step-4 formcontener">
          <form
            name="ratingform"
            id="ratingform"
            onSubmit={submitrating}
            //encType="multipart/form-data"
          >
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="ratingacademic"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Academic
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="ratingacademic"
                  name="ratingacademic"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.ratingacademic && editdata.ratingacademic}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattingaccommodation"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Accommodation
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattingaccommodation"
                  name="rattingaccommodation"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={
                    editdata.rattingaccommodation &&
                    editdata.rattingaccommodation
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattingfaculty"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Faculty
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattingfaculty"
                  name="rattingfaculty"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.rattingfaculty && editdata.rattingfaculty}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattinginfrastructure"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Infrastructure
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattinginfrastructure"
                  name="rattinginfrastructure"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={
                    editdata.rattinginfrastructure &&
                    editdata.rattinginfrastructure
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattingplacements"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Placements
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattingplacements"
                  name="rattingplacements"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={
                    editdata.rattingplacements && editdata.rattingplacements
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattingsocial"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Social
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattingsocial"
                  name="rattingsocial"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.rattingsocial && editdata.rattingsocial}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="rattingthroughout"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Ratting Throughout
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rattingthroughout"
                  name="rattingthroughout"
                  type="number"
                  placeholder="Out of 100"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={
                    editdata.rattingthroughout && editdata.rattingthroughout
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const renderContact = () => {
    return (
      <>
        <div className="sm:col-span-4 contact step-4 formcontener">
          <form
            name="contactusform"
            id="contactusform"
            onSubmit={submitcontactus}
            //encType="multipart/form-data"
          >
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="address"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Address <spn className="text-orange">*</spn>
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.address && editdata.address}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="address2"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Address2
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.address2 && editdata.address2}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="landmark"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Landmark
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="landmark"
                  name="landmark"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.landmark && editdata.landmark}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="country"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Country
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <select
                  name="country"
                  id="country"
                  onChange={handleChangeFormdata}
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray pb-2 pt-2"
                >
                  <option value="">Select Country</option>
                  {countryarr.map((items, i) => (
                    <option
                      value={items.cout_id}
                      selected={
                        items.cout_id == editdata.country ? true : false
                      }
                    >
                      {items.country_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="state"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                State
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                {/*  <input
                  id="state"
                  name="state"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.state && editdata.state}
                  onChange={handleChangeFormdata}
                /> */}
                <select
                  name="state"
                  id="state"
                  //onChange={handleChangeFormdata}
                  onChange={changeStateid}
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray pb-2 pt-2"
                >
                  <option value="">Select State</option>
                  {statearr.map((items, i) => (
                    <option
                      value={items.sta_id}
                      selected={items.sta_id == editdata.state ? true : false}
                    >
                      {items.state_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="city"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                City
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                {/*  <input
                  id="city"
                  name="city"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.city && editdata.city}
                  onChange={handleChangeFormdata}
                /> */}
                <select
                  name="city"
                  id="city"
                  onChange={handleChangeFormdata}
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray pb-2 pt-2"
                >
                  <option value="">Select City</option>
                  {cityarr.map((items, i) => (
                    <option
                      value={items.cit_id}
                      selected={items.cit_id == editdata.city ? true : false}
                    >
                      {items.city_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="pincode"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Pin Code
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.pincode && editdata.pincode}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="contactno"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Contact No.
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="contactno"
                  name="contactno"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.contactno && editdata.contactno}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="faxno"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Fax No.
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="faxno"
                  name="faxno"
                  type="text"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.faxno && editdata.faxno}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="email"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Email
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.email && editdata.email}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="website"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Website
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  value={editdata.website && editdata.website}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderPlacements = () => {
    return (
      <>
        <div className="sm:col-span-4 placements step-5 formcontener">
          <form
            name="placementForm"
            id="placementForm"
            onSubmit={submitplacement}
          >
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="placementdescription"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Overview
              </label>
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    plugins: [
                      Essentials,
                      Bold,
                      Italic,
                      Paragraph,
                      Mention,
                      List,
                      Table,
                      Heading,
                      BlockQuote,
                      Alignment,
                      Number,
                    ],

                    toolbar: [
                      "bold",
                      "italic",
                      "|",
                      "undo",
                      "redo",
                      "|",
                      "numberedList",
                      "bulletedList",

                      "Alignment",
                      "Link",
                      "ListUI",
                      "|",
                      "BlockQuote",
                      "Undo",
                      "Redo",
                      "Mention",
                      "Table",
                    ],
                    menuBar: {
                      isVisible: true,
                    },
                  }}
                  data={
                    editdata.placement_overview
                      ? editdata.placement_overview
                      : ""
                  }
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log("Editor 1 is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const placedesc_data = editor.getData();
                    setPlacementoverviewvalue(placedesc_data);
                    //console.log({ event, editor, college_descripton_data });
                  }}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="totalplacementratio"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Total Placement Ratio
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="totalplacementratio"
                  id="totalplacementratio"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="like- d%"
                  value={
                    editdata.totalplacementratio && editdata.totalplacementratio
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="averageplacementrecord"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Average Placement Record
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="averageplacementrecord"
                  id="averageplacementrecord"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Like- d LPA"
                  value={
                    editdata.averageplacementrecord &&
                    editdata.averageplacementrecord
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="higestplacementrecord"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Higest Placement Record
              </label>

              <div className="flex rounded-md">
                <input
                  type="text"
                  name="higestplacementrecord"
                  id="higestplacementrecord"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Like- d LPA"
                  value={
                    editdata.higestplacementrecord &&
                    editdata.higestplacementrecord
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="lowestplacementrecord"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Lowest Placement Record
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="lowestplacementrecord"
                  id="lowestplacementrecord"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Like- d LPA"
                  value={
                    editdata.lowestplacementrecord &&
                    editdata.lowestplacementrecord
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="toprecruiters"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Top Recruiters
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="toprecruiters"
                  id="toprecruiters"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Like- Google, IBM, Microsoft, Delloit etc."
                  value={editdata.toprecruiters && editdata.toprecruiters}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="toprecuitingsectors"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Top Recruiting Sectors
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="toprecuitingsectors"
                  id="toprecuitingsectors"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Finance, IT etc."
                  value={
                    editdata.toprecuitingsectors && editdata.toprecuitingsectors
                  }
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="topprofile"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Top Profile
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  name="topprofile"
                  id="topprofile"
                  className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-gray"
                  placeholder="Trainee, Accounts, Marketing Heads"
                  value={editdata.topprofile && editdata.topprofile}
                  onChange={handleChangeFormdata}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderGallery = () => {
    return (
      <>
        <div className="sm:col-span-4 gallery step-6  formcontener">
          <form
            name="galleryForm"
            id="galleryForm"
            onSubmit={submitGallery}
            encType="multipart/form-data"
          >
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="gallery_image1"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Gallery Image1
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="gallery1"
                  type="file"
                  filename={gallery1}
                  onChange={(e) => setGallery1(e.target.files[0])}
                  accept="image/*"
                />

                {editdata.gallery1 && (
                  <img
                    src={getGalleryURL(editdata.gallery1)}
                    alt={editdata.gallery1}
                    width={100}
                  />
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="gallery_image2"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Gallery Image2
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="gallery2"
                  type="file"
                  filename={gallery2}
                  onChange={(e) => setGallery2(e.target.files[0])}
                  accept="image/*"
                />
                {editdata.gallery2 && (
                  <img
                    src={getGalleryURL(editdata.gallery2)}
                    alt={editdata.gallery2}
                    width={100}
                  />
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="gallery_image3"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Gallery Image3
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="gallery3"
                  type="file"
                  filename={gallery3}
                  onChange={(e) => setGallery3(e.target.files[0])}
                  accept="image/*"
                />
                {editdata.gallery3 && (
                  <img
                    src={getGalleryURL(editdata.gallery3)}
                    alt={editdata.gallery3}
                    width={100}
                  />
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="gallery_image4"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Gallery Image4
              </label>
              <div className=" rounded-md shadow-sm  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input
                  name="gallery4"
                  type="file"
                  filename={gallery4}
                  onChange={(e) => setGallery4(e.target.files[0])}
                  accept="image/*"
                />
                {editdata.gallery4 && (
                  <img
                    src={getGalleryURL(editdata.gallery4)}
                    alt={editdata.gallery4}
                    width={100}
                  />
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="gallery_image5"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Gallery Image5
              </label>
              <div className=" rounded-md  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input
                  name="gallery5"
                  type="file"
                  filename={gallery5}
                  onChange={(e) => setGallery5(e.target.files[0])}
                  accept="image/*"
                />
                {editdata.gallery5 && (
                  <img
                    src={getGalleryURL(editdata.gallery5)}
                    alt={editdata.gallery5}
                    width={100}
                  />
                )}
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="brouchure"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Upload Brouchure
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="brouchure"
                  type="file"
                  filename={brouchure}
                  onChange={(e) => setBrouchure(e.target.files[0])}
                  accept="image/*"
                />

                <input
                  type="hidden"
                  name="old_gallery1"
                  value={editdata.gallery1}
                />
                <input
                  type="hidden"
                  name="old_gallery2"
                  value={editdata.gallery2}
                />
                <input
                  type="hidden"
                  name="old_gallery3"
                  value={editdata.gallery3}
                />
                <input
                  type="hidden"
                  name="old_gallery4"
                  value={editdata.gallery4}
                />
                <input
                  type="hidden"
                  name="old_gallery5"
                  value={editdata.gallery5}
                />
                <input
                  type="hidden"
                  name="old_brouchure"
                  value={editdata.brouchure}
                />
              </div>
            </div>
            <div className="sm:col-span-4 pb-2">
              <label
                htmlFor="youtube"
                className="block text-left font-normal leading-6 text-gray-dark pb-1"
              >
                Youtube
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="youtube"
                  value={editdata.youtube && editdata.youtube}
                  onChange={handleChangeFormdata}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 space-x-1">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Exit
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {cid > 0 ? "Update" : "Save"} & Next
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const showBasic = () => {
    setIsBasic(true);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("active");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showContacts = () => {
    setIsBasic(false);
    setIsHighLights(false);
    setIsContact(true);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("active");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showHighlights = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(true);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("active");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showGallery = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(true);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("active");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showAdmissions = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(true);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("active");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showPlacements = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(true);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("active");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("");
  };
  const showFAQ = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(true);
    setIsCourse(false);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("active");
    setCourseActive("");
    setRatingActive("");
  };
  const showCourse = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(true);
    setIsRating(false);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("active");
    setRatingActive("");
  };
  const showRating = () => {
    setIsBasic(false);
    setIsContact(false);
    setIsHighLights(false);
    setIsGallery(false);
    setIsAdmission(false);
    setIsPlacement(false);
    setIsFaq(false);
    setIsCourse(false);
    setIsRating(true);

    setBasicActive("");
    setContactActive("");
    setHighlightsActive("");
    setGalleryActive("");
    setAdmissionActive("");
    setPlacementActive("");
    setFaqActive("");
    setCourseActive("");
    setRatingActive("active");
  };

  return (
    <>
      {renderPageHeader()}

      <div className="p-2">
        <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-2">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 college-details">
            {renderSteps()}

            {isBasic && renderBasicInfo()}

            {isHighlights && renderHighlights()}

            {isAdmission && renderAdmission()}

            {isContact && renderContact()}

            {isPlacement && renderPlacements()}

            {isGallery && renderGallery()}
            {isRating && renderRating()}

            {isFaq && renderFAQ()}

            {isCourse && renderCourse()}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default College;
