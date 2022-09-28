import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 400px;
  border-radius: 12px;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  border-radius: 12px 12px 0px 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.img`
  background-color: antiquewhite;
  width: 200px;
  border-radius: 50%;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  text-align: center;
`;

export const Tag = styled.p`
  color: #919da9;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: #919da9;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  color: #919da9;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const StatsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  background-color: #f3f6f9;
  border: 1px solid #d6d6d6;
  border-radius: 0px 0px 12px 12px;
`;

export const StatsItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Quantity = styled.span`
  font-weight: 700;
  text-align: center;
`;