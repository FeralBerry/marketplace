package com.market.repositories;

import com.market.entity.FrontMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FrontMenuRepository extends JpaRepository<FrontMenu,Long> {

}