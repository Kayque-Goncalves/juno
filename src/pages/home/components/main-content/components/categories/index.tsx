import React, {FunctionComponent, ReactElement, useEffect, useState} from "react";

import { CardsContainer, Card, CardWrapper } from "./styles";
import {getCategories} from "../../../../../../services/getCategories";

const Categories: FunctionComponent = (): ReactElement => {
  const [categories, setCategories] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCategories()

        setCategories(data)
      } catch (error) {
        if (error) {
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('user')
          window.location.replace('/')
        }
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <p style={{ fontSize: '16px' }}>Categorias</p>
      {categories ? (
        <CardsContainer>
          {categories?.categories.items.map((category: any) => {
            return (
                <CardWrapper key={category.id}>
                  <Card>
                    <img alt={category.name} src={category.icons[0].url}/>
                  </Card>
                  <p>{category.name}</p>
                </CardWrapper>
              )
          })}
        </CardsContainer>
      ) : null}
    </>
  )
}

export default Categories