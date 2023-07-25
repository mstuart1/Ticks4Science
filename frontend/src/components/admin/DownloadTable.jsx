import React, {
  // useCallback, 
  useEffect, useState
} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import OutlineFloatButton from "../ui/outlineFloatButton/OutlineFloatButton";
import BorderlessFloatButton from "../ui/borderlessFloatButton/BorderlessFloatButton";
import { theme } from "../../theme";
import SubmissionDataService from "../../services/submission";
import { useSelector } from "react-redux";

const Styles = {
  Wrapper: styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
  `,
  ButtonCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  TableContainer: styled.div`
    table {
      font-family: sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    table td,
    table th {
      border: 1px solid #ddd;
      padding: 1rem;
    }

    table tr:nth-child(even) {
      background-color: #f5f3f2;
    }

    table tr:hover {
      background-color: #e5e2e0;
    }

    table th {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      text-align: center;
      background-color: #137b80;
      color: white;
    }
  `,
};

const DownloadTable = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  const [data, setData] = useState([]);

  // console.log('data', data)

  // get the data from the backend
  useEffect(() => {
    let getData = async (token) => {
      return await SubmissionDataService.getDownloadData(token);
    };

    getData(token).then((response) => {
      // console.log(response.data.record);
      let preData = response.data.record;
      let data = preData.map((item) => {
        let pathos = {}
        if (item.pathogens.length){
          item.pathogens.forEach(patho => {
            let pathogen = patho.pathogen
            let result = patho.submission_pathogen.result
            item[pathogen] = result
          })
        }
        
        if (!!item.specimen){
          item.specimenScientific = item.specimen.specimenScientific
        }
        // if (item.id === 13){
          
        //   console.log('item.pathogens',{...item})
        // }
        delete item.photo
        delete item.specimen
        delete item.specIdUser
        delete item.photoIdUser
        delete item.pathogens

        return item
      })
      setData(data);
    });
  }, [token]);

  // define the columns
  let columns = [
    "id",
    "dateSubmitted",
    "photosReviewedDate",
    "notATick",
    "specimenRequestedDate",
    "specimenReceivededDate",
    "specimenId",
    "duplicate",
    "deletedDate",
  ];

  // map through the rows as elems
  let tableElems = data.map((item, i) => (
    <tr key={i}>
      <td>{item.id}</td>
      <td>{item.createdAt?.substring(0, 10)}</td>
      <td>{item.photosReviewed?.substring(0, 10)}</td>
      <td>{item.notATick && "not a tick"}</td>
      <td>{item.specimenRequested?.substring(0, 10)}</td>
      <td>{item.specimenReceived?.substring(0, 10)}</td>
      <td>{item.specimen?.specimenScientific}</td>
      <td>{item.duplicate}</td>
      <td>{item.deletedAt?.substring(0, 10)}</td>
    </tr>
  ));
  let date = new Date();
  let dateString = `${date.getFullYear()}_${date.getMonth() + 1
    }_${date.getDate()} `;

  return (
    <Styles.Wrapper>
      <Styles.ButtonCont>
        <CSVLink
          style={{ textDecoration: "none" }}
          data={data}
          filename={`ticksWebsiteData-${dateString}.csv`}
        >
          <OutlineFloatButton
            colors={{
              text: theme.colors.ruTeal,
              shadow: theme.colors.ruTeal,
              bg: theme.colors.ruTeal,
            }}
            text="Download Data"
            padding="2rem"
          />
        </CSVLink>
        <BorderlessFloatButton
          handleClick={() => navigate("/admin")}
          text="Back to Dashboard"
        />
      </Styles.ButtonCont>
      <p>
        Additional data have been excluded from this view for screen space but
        are included in the download. If a submission has multiple pathogens,
        that submission will appear in multiple rows, one for each pathogen.
        Please be aware that rows may appear duplicated because of this, but
        that each row contains a separate pathogen.
      </p>
      <Styles.TableContainer>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>{tableElems}</tbody>
        </table>
      </Styles.TableContainer>
    </Styles.Wrapper>
  );
};

export default DownloadTable;
