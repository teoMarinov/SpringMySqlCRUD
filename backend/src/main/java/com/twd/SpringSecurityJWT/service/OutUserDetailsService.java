package com.twd.SpringSecurityJWT.service;

import com.twd.SpringSecurityJWT.repository.OurUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class OutUserDetailsService implements UserDetailsService {

    @Autowired
    private OurUserRepo outUserRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return outUserRepo.findByEmail(username).orElseThrow();
    }
}
